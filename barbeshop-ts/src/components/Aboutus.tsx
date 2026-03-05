import { useNavigate } from "react-router-dom";
import "../css.styles/Aboutus.css";

export default function AboutUs() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="about-section">
      {/* QUIENES SOMOS */}
      <section className="container quienes-somos">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Somos una barbería moderna fundada con la misión de ofrecer 
              servicios de alta calidad en un ambiente cómodo y profesional. 
              Nos enfocamos en la atención personalizada y en brindar una 
              experiencia única a cada cliente.
            </p>

            <p>
              Nuestro equipo está conformado por barberos capacitados con 
              años de experiencia en tendencias clásicas y modernas.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1"
              alt="Barbería"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </section>

      {/* MISION VISION VALORES */}
      <section className="mision-vision-valores">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <div className="card">
                <h4>Misión</h4>
                <p>
                  Ofrecer servicios de barbería de calidad superior,
                  garantizando satisfacción y confianza en cada visita.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <h4>Visión</h4>
                <p>
                  Convertirnos en la barbería líder de la región,
                  reconocida por innovación y excelencia.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <h4>Valores</h4>
                <p>
                  Profesionalismo, puntualidad, respeto,
                  innovación y compromiso con cada cliente.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="container servicios">
        <h2>Nuestros Servicios</h2>

        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="servicio-card">
              <h5>Corte Clásico</h5>
              <p>
                Técnicas tradicionales con acabado profesional.
              </p>
              <p className="price">$10</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="servicio-card">
              <h5>Fade Moderno</h5>
              <p>
                Cortes degradados adaptados a tendencias actuales.
              </p>
              <p className="price">$15</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="servicio-card">
              <h5>Barba Premium</h5>
              <p>
                Perfilado, hidratación y diseño profesional.
              </p>
              <p className="price">$8</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="servicio-card">
              <h5>Paquete Completo</h5>
              <p>
                Corte + Barba + Lavado + Masaje capilar.
              </p>
              <p className="price">$20</p>
            </div>
          </div>

        </div>
      </section>

      {/* ESTADISTICAS */}
      <section className="estadisticas">
        <div className="container text-center">
          <div className="row">

            <div className="col-md-3">
              <h2>+1,200</h2>
              <p>Clientes Atendidos</p>
            </div>

            <div className="col-md-3">
              <h2>5</h2>
              <p>Barberos Profesionales</p>
            </div>

            <div className="col-md-3">
              <h2>+10</h2>
              <p>Años de Experiencia</p>
            </div>

            <div className="col-md-3">
              <h2>100%</h2>
              <p>Satisfacción Garantizada</p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="container contacto">
        <h2>Visítanos</h2>

        <p>
          📍 Santo Domingo, República Dominicana <br />
          📞 +1 (809) 000-0000 <br />
          📧 contacto@tubarberia.com
        </p>

        <button
          onClick={handleNavigate}
          className="btn-cta-primary"
        >
          Agendar Cita
        </button>
      </section>

    </div>
  );
}