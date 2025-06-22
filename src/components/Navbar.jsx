import { Link } from "react-router-dom";
import "./navbar.css"; // Asegúrate de importar el CSS retro

export const Navbar = () => {
  return (
    <nav className="retro-navbar">
      <div className="retro-navbar-container">
        <Link to="/" className="retro-navbar-brand">
          <span>Contact List</span>
        </Link>
        
      </div>
    </nav>
  );
};
