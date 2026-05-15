import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin({ isAdmin, onLogin, onLogout }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
