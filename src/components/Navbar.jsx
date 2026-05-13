import { Link } from "react-router-dom";
import carLogo from "../assets/hero.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={carLogo} alt="MotoGrid" />
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