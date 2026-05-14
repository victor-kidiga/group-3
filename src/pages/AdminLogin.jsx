import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSettings, updateSettings } from "../services/api";

function AdminLogin({ isAdmin, onLogin, onLogout }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [salesPhone, setSalesPhone] = useState("");
  const [settingsMessage, setSettingsMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) return;

    async function loadSettings() {
      try {
        const settings = await getSettings();
        setSalesPhone(settings.salesPhone || "");
      } catch (settingsError) {
        console.error("Error loading settings:", settingsError);
      }
    }

    loadSettings();
  }, [isAdmin]);

  async function handleSettingsSubmit(event) {
    event.preventDefault();
    setSettingsMessage("");

    try {
      await updateSettings({ salesPhone });
      setSettingsMessage("Sales phone number updated.");
    } catch (settingsError) {
      console.error("Error updating settings:", settingsError);
      setSettingsMessage("Could not update sales phone number.");
    }
  }

  if (isAdmin) {
    return (
      <div className="page-container admin-page">
        <h1>Admin Area</h1>
        <p>You are logged in as admin.</p>
        <div className="admin-actions">
          <button type="button" onClick={() => navigate("/add-car")}>
            Add Car
          </button>
          <button type="button" onClick={() => navigate("/cars")}>
            Manage Cars
          </button>
          <button type="button" className="danger-button" onClick={onLogout}>
            Logout
          </button>
        </div>

        <form className="admin-settings-form" onSubmit={handleSettingsSubmit}>
          <h2>Sales Contact</h2>
          <input
            type="tel"
            placeholder="Sales phone number"
            value={salesPhone}
            onChange={(event) => setSalesPhone(event.target.value)}
            required
          />
          <button type="submit">Update Sales Phone</button>
          {settingsMessage && <p className="form-message">{settingsMessage}</p>}
        </form>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const loggedIn = onLogin(password);

    if (loggedIn) {
      navigate("/cars");
      return;
    }

    setError("Incorrect admin password");
  }

  return (
    <div className="page-container admin-page">
      <h1>Admin Login</h1>
      <p className="admin-helper">Enter the admin password to manage cars.</p>
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default AdminLogin;