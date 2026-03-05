
import { useEffect, useState } from "react";
import "../css.styles/Galeria.css";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
    alt: "Corte Clásico",
    title: "Corte Clásico",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    alt: "Fade Moderno",
    title: "Fade Moderno",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519075623773-fbbf585ff464?w=400&h=400&fit=crop",
    alt: "Barba Premium",
    title: "Barba Premium",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
    alt: "Peinado Especial",
    title: "Peinado Especial",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
    alt: "Corte Degradado",
    title: "Corte Degradado",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    alt: "Diseño Personalizado",
    title: "Diseño Personalizado",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1539571696357-5a69c006ae0f?w=400&h=400&fit=crop",
    alt: "Corte Undercut",
    title: "Corte Undercut",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1457180144351-bbf25e2c6780?w=400&h=400&fit=crop",
    alt: "Estilo Clásico",
    title: "Estilo Clásico",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop",
    alt: "Fade Profesional",
    title: "Fade Profesional",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=400&h=400&fit=crop",
    alt: "Diseño Artístico",
    title: "Diseño Artístico",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    alt: "Peinado Moderno",
    title: "Peinado Moderno",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
    alt: "Barba Arreglada",
    title: "Barba Arreglada",
  },
];

export default function Galeria() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const HandleAnimate = ( ) => {
         setAnimate(true);
    } 

    HandleAnimate();
  }, []);

  return (
    <section className="galeria-section">
      <div className="galeria-container">
        <div className={`galeria-header ${animate ? "animate-in" : ""}`}>
            <br />
            <br />
          <h2 className="galeria-title">Nuestra Galería</h2>
          <p className="galeria-subtitle">Explora nuestros mejores trabajos y estilos</p>
        </div>

        <div className={`galeria-grid ${animate ? "animate-in" : ""}`}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className="galeria-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="galeria-image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="galeria-image"
                />
                <div className="galeria-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}