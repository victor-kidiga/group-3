import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MotoGrid
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/add-car">Add Car</Link>
      </div>
    </nav>
  );
}

export default Navbar;