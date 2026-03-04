import { Link, useNavigate } from "react-router-dom";
import "../css.styles/Inicio.premium.css";

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <>

      {/* ═══════════════════════════════════════ HERO SECTION ═══════════════════════════════════════ */}
      <section className="hero-section-premium">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>

        <div className="hero-content-premium">
          <h1 className="hero-title">
            <span className="hero-line">El Arte del</span>
            <span className="hero-highlight">Corte Perfecto</span>
          </h1>

          <p className="hero-subtitle">
            Donde la tradición barberiana se encuentra con el estilo contemporáneo.
            Cada corte es una obra de arte diseñada exclusivamente para ti.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn-cta-primary" 
              onClick={() => navigate("/register")}
            >
              Reservar Cita Ahora
            </button>
            <Link to="/" className="btn-cta-secondary">
              Explorar Servicios →
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2.5K+</span>
              <span className="stat-label">Clientes Satisfechos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Barberos Expertos</span>
            </div>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="scissors-icon">✂️</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ SERVICIOS DESTAC. ═══════════════════════════════════════ */}
      <section className="services-preview">
        <h2>Nuestros Servicios Principales</h2>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">💇</div>
            <h3>Corte Clásico</h3>
            <p>Estilos tradicionales con acabado impeccable</p>
          </div>
          <div className="service-item">
            <div className="service-icon">✨</div>
            <h3>Fade Profesional</h3>
            <p>Degradados modernos con máxima precisión</p>
          </div>
          <div className="service-item">
            <div className="service-icon">🧔</div>
            <h3>Arreglo de Barba</h3>
            <p>Perfilado y diseño personalizado</p>
          </div>
          <div className="service-item">
            <div className="service-icon">💆</div>
            <h3>Tratamiento Capilar</h3>
            <p>Cuidado profundo y nutritivo</p>
          </div>
        </div>
      </section>

    </>
  );
};

export default Inicio;  

