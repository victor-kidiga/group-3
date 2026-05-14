import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/cars", label: "Cars" },
  { to: "/add-car", label: "Add New Car", adminOnly: true },
  { to: "/admin", label: "Settings" },
];

function Navbar({ isAdmin, onAdminLogout, theme, onToggleTheme }) {
  return (
    <>
      <aside className="sidebar">
        <Link to="/" className="brand" aria-label="MotoGrid dashboard">
          <img src="/motogrid-logo.png" alt="" className="brand-logo" />
        </Link>

        <nav className="side-nav" aria-label="Admin navigation">
          {navItems.map((item) => {
            if (item.adminOnly && !isAdmin) return null;

            return (
              <NavLink key={item.to} to={item.to} end={item.end}>
                <span className="nav-dot" aria-hidden="true" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          {isAdmin ? (
            <button type="button" className="text-button" onClick={onAdminLogout}>
              Logout
            </button>
          ) : (
            <Link to="/admin" className="text-button">
              Admin Login
            </Link>
          )}
        </div>
      </aside>

      <header className="topbar">
        <Link to="/" className="mobile-brand" aria-label="MotoGrid dashboard">
          <img src="/motogrid-logo.png" alt="" />
        </Link>

        
        <div className="topbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb" />
            </span>
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          <Link to="/admin" className="admin-chip">
            <span className="avatar" aria-hidden="true">A</span>
            <span>{isAdmin ? "Admin" : "Login"}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;