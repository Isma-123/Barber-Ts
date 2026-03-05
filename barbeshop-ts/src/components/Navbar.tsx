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
          <Link to="/inicio" className="nav-link">
             inicio
          </Link>
          <Link to="/galeria" className="nav-link">
            Galería
          </Link>
          <Link to="/aboutus" className="nav-link">
            Sobre Nosotros
          </Link>
          <Link to = "/servicios" className ="nav-link"> 
             servicios
          </Link>
        </nav>

        <div className="navbar-auth">
          <button className="btn-login" onClick={() => navigate("/login")}>
            Iniciar Sesión
          </button>
          <button className="btn-register" onClick={() => navigate("/register")}>
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;