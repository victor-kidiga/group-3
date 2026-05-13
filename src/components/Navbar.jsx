import { Link } from "react-router-dom";

function Navbar({ isAdmin, onAdminLogout }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MotoGrid
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        {isAdmin && <Link to="/add-car">Add Car</Link>}
        {isAdmin ? (
          <button type="button" className="admin-button" onClick={onAdminLogout}>
            Admin Logout
          </button>
        ) : (
          <Link to="/admin" className="admin-link">
            Admin Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
