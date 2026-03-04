import { Link, useNavigate } from "react-router-dom";
import "../css.styles/Inicio.premium.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar-premium navbar-sticky">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="logo-link">
            <span className="logo-icon">✂️</span>
            <span className="logo-text">Yeferson</span>
            <span className="logo-sub">Barbería</span>
          </Link>
        </div>

        <nav className="navbar-links">
          <Link to="/servicios" className="nav-link">
            Servicios
          </Link>
          <Link to="/" className="nav-link">
            Galería
          </Link>
          <Link to="/" className="nav-link">
            Sobre Nosotros
          </Link>
          <Link to="/" className="nav-link">
            Contacto
          </Link>
        </nav>

        <div className="navbar-auth">
          <button className="btn btn-success" onClick={() => navigate("/login")}>
            Iniciar Sesión
          </button>
          <button className="btn btn-primary" onClick={() => navigate("/register")}>
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;