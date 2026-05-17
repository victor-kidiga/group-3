import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import AdminLogin from "./pages/AdminLogin";

const ADMIN_PASSWORD = "admin123";

function App() {
  const [isAdmin, setIsAdmin] = useState(
    () => localStorage.getItem("isAdmin") === "true"
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleAdminLogin(password) {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
      return true;
    }

    return false;
  }

  function handleAdminLogout() {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <BrowserRouter>
      <div className="admin-shell">
        <Navbar
          isAdmin={isAdmin}
          onAdminLogout={handleAdminLogout}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="workspace">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars isAdmin={isAdmin} />} />
            <Route path="/cars/:id" element={<CarDetails isAdmin={isAdmin} />} />
            <Route
              path="/admin"
              element={
                <AdminLogin
                  isAdmin={isAdmin}
                  onLogin={handleAdminLogin}
                  onLogout={handleAdminLogout}
                />
              }
            />
            <Route
              path="/add-car"
              element={isAdmin ? <AddCar /> : <Navigate to="/admin" replace />}
            />
            <Route
              path="/edit-car/:id"
              element={isAdmin ? <EditCar /> : <Navigate to="/admin" replace />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
