import { useEffect, useState } from "react";
import "../css.styles/Contactanos.css";
import { toast } from "react-toastify";

type FormDate = { 
  name: string; 
  email: string; 
  message: string;
};

export default function Contactanos() {
    
  const [formData, setFormData] = useState<FormDate>({ 
    name: "",
    email: "",     
    message: ""
  });   

  const [ date, setdate ] = useState(''); 

  useEffect(() => { 
      const HandleTime = () => {
        const currentDate = new Date(); 
        setdate(currentDate.toLocaleTimeString('es-ES',
           { hour: "2-digit", 
            minute: "2-digit",
            weekday: "long",
            month: "long",
            day: "numeric", 
            year: "numeric"
           }
        )); 
      }
      
      HandleTime();
      const intevalo = setInterval(() => {
        HandleTime();
      }, 60000); 
      return (() => {
        clearInterval(intevalo);
      })
  }, [date]);

  // Validar email con regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validar nombre (mínimo 3 caracteres)
  const isValidName = (name: string) => {
    return name.trim().length >= 3;
  };

  // Validar mensaje (mínimo 10 caracteres)
  const isValidMessage = (message: string) => {
    return message.trim().length >= 10;
  };

  const HandleForm = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    // Validar nombre
    if (!formData.name.trim()) {
      toast.error("El nombre es obligatorio");
      return;
    }

    if (!isValidName(formData.name)) {
      toast.error("El nombre debe tener al menos 3 caracteres");
      return;
    }

    // Validar email
    if (!formData.email.trim()) {
      toast.error("El email es obligatorio");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Ingresa un email válido (ej: usuario@ejemplo.com)");
      return;
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      toast.error("El mensaje es obligatorio");
      return;
    }

    if (!isValidMessage(formData.message)) {
      toast.error("El mensaje debe tener al menos 10 caracteres");
      return;
    }

    // ✅ Aquí iría tu lógica (ej: enviar a backend)
     
    toast.success("Mensaje enviado correctamente. Pronto nos pondremos en contacto");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Contáctanos</h2>
          <p className="contact-subtitle">Estamos aquí para atenderte. Envíanos un mensaje y te responderemos pronto.</p>
          <div className="info-item">
            <div>
              <h4>Hora</h4>
              <p>{date}</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">📍</div>
            <div>
              <h4>Dirección</h4>
              <p>Calle Principal 123, Ciudad</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="icon">📞</div>
            <div>
              <h4>Teléfono</h4>
              <p>+1 234 567 890</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <h4>Email</h4>
              <p>info@barbershop.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">🕒</div>
            <div>
              <h4>Horarios</h4>
              <p>Lun - Dom 10am - 12pm<br />Sáb: horario indefinido</p>
              <p>Martes no Soy Barbero att: <strong>Yeferson</strong></p>
               
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form onSubmit={HandleForm} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Cuéntanos cómo podemos ayudarte..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}