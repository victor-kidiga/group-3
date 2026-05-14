import { Link, NavLink } from "react-router-dom";

function Navbar({ isAdmin, onAdminLogout, theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="MotoGrid home">
          <img src="/motogrid-logo.png" alt="" className="logo-image" />
          <span className="logo-text">
            <strong>MotoGrid</strong>
            <small>Drive your world</small>
          </span>
        </Link>

        <div className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/cars">Browse Cars</NavLink>
          {isAdmin && <NavLink to="/add-car">Add Car</NavLink>}
          <NavLink to="/admin">{isAdmin ? "Admin Panel" : "Admin Login"}</NavLink>
        </div>

        <div className="nav-actions">
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

          {isAdmin ? (
            <button type="button" className="nav-button ghost" onClick={onAdminLogout}>
              Logout
            </button>
          ) : (
            <Link to="/admin" className="nav-button ghost">
              Login
            </Link>
          )}

          <Link to={isAdmin ? "/add-car" : "/cars"} className="nav-button primary">
            {isAdmin ? "Add Car" : "View Cars"}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
