import { useNavigate, Link } from "react-router-dom";
import "../css.styles/Auth.css";
import { useState } from "react";
import { toast } from "react-toastify";

export const Login = () => { 
    
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { email?: string; password?: string } = {};
    // manejo de validaciones
    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (email.length < 5) {
      newErrors.email = "El correo debe tener al menos 5 caracteres";
    } else if (!email.includes("@")) {
      newErrors.email = "Debe ser un correo válido";
    }
    
    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    try {
      console.log("Login data:", { email, password });
      toast.success("Inicio de sesión exitoso");
      navigate("/");
    } catch {
      toast.error("Error al iniciar sesión");
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
          }}>Iniciar Sesión</h2>
          <form onSubmit={onSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input 
                type="email" 
                id="email" 
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                type="password" 
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <button type="submit" className="btn-submit">Iniciar Sesión</button>
          </form>
          <p className="switch">
            ¿No tienes cuenta? <Link to="/register">Registrarse</Link>
          </p>
        </div>
      </div>
    </>
  );
};

