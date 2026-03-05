import { Link, useNavigate } from "react-router-dom";
import "../css.styles/Servicios.css";

const Servicios = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Corte Clásico",
      description: "Estilos tradicionales con acabado impeccable y técnica de barbero profesional.",
      price: "$25",
      duration: "45 min",
      icon: "💇",
    },
    {
      id: 2,
      name: "Fade Profesional",
      description: "Degradados modernos con máxima precisión y detalles al más alto nivel.",
      price: "$30",
      duration: "50 min",
      icon: "✨",
    },
    {
      id: 3,
      name: "Arreglo de Barba",
      description: "Perfilado y diseño personalizado para tu barba con productos premium.",
      price: "$20",
      duration: "30 min",
      icon: "🧔",
    },
    {
      id: 4,
      name: "Tratamiento Capilar",
      description: "Cuidado profundo y nutritivo para mantener tu cabello en perfecto estado.",
      price: "$35",
      duration: "60 min",
      icon: "💆",
    },
    {
      id: 5,
      name: "Hot Shave",
      description: "Afeitado clásico con toallas calientes, espuma premium y acabado sedoso.",
      price: "$28",
      duration: "40 min",
      icon: "🪒",
    },
    {
      id: 6,
      name: "Package Completo",
      description: "Corte, barba, tratamiento capilar y hot shave en una sesión completa.",
      price: "$85",
      duration: "120 min",
      icon: "👑",
    },
  ];

  return (
    <div className="servicios-wrapper">
    
      <section className="servicios-header">
        <div className="servicios-header-overlay"></div>
        <div className="servicios-header-content">
          <h1>Servicios</h1>
          <p>Descubre la completa gama de servicios barberiles que hemos preparado para ti</p>
        </div>
      </section>

      
      <section className="servicios-section">
        <div className="servicios-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-header">
                <span className="service-icon">{service.icon}</span>
                <div className="service-info-header">
                  <h3 style = {{ 
                    color: "0099ff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: 'Arial, sans-serif',
                  }}>{service.name}</h3>
                  <span className="service-duration">⏱️ {service.duration}</span>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <button className="btn btn-primary">Reservar</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section className="servicios-cta">
        <h2>¿Listo para tu próxima cita?</h2>
        <p>Reserva ahora y obtén un 10% de descuento en tu primer servicio</p>
        <button className="btn-cta-large" onClick={() => navigate("/login")}>
          Reservar Cita Ahora
        </button>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="servicios-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Barbería Yeferson</h4>
            <p>Tu lugar de confianza para un corte de calidad profesional</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/servicios">Servicios</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>📞 +1-555-1234</p>
            <p>📧 info@yefersonbarberia.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Barbería Yeferson. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
};

export default Servicios;
