import { useNavigate, Link } from "react-router-dom";
import "../css.styles/Auth.css";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirmPassword?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    
    if (!formData.name) {
      newErrors.name = "El nombre es obligatorio";
    } else if (formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    } else if (formData.name.length > 50) {
      newErrors.name = "El nombre no puede exceder 50 caracteres";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = "El nombre solo puede contener letras y espacios";
    }
    
    // Validar email
    if (!formData.email) {
      newErrors.email = "El correo es obligatorio";
    } else if (formData.email.length < 5) {
      newErrors.email = "El correo debe tener al menos 5 caracteres";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Debe ser un correo válido";
    }
    
    // Validar contraseña
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "La contraseña debe contener al menos una letra minúscula";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "La contraseña debe contener al menos una letra mayúscula";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "La contraseña debe contener al menos un número";
    }
    
    // Validar confirmación de contraseña
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Debes confirmar la contraseña";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    
    return newErrors;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    try {
      console.log("Register data:", formData);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("¡Registro exitoso! Redirigiendo...");
      setTimeout(() => navigate("/"), 2000);
    } catch {  
      toast.error("Error al registrarse. Intenta de nuevo");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="auth-page">
        <div className="auth-box">
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: 'Arial, sans-serif',
            color: "#d4af37",
          }}>Crear Cuenta</h2>
          <form onSubmit={onSubmit} className="auth-form">
            {/* NOMBRE */}
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                placeholder="Juan Pérez"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
              <p className="password-hint">Mín. 6 caracteres, una mayúscula, una minúscula y un número</p>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={errors.confirmPassword ? "input-error" : ""}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registrando..." : "Registrarse"}
            </button>
          </form>
          <p className="switch">
            ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;