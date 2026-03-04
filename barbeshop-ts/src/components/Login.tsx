import { Link } from "react-router-dom";
import "../css.styles/Auth.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/CreateContext";

export const Login = () => { 
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  if (!authContext) {
    throw new Error("AuthContext no está disponible");
  }

  const { Login: handleLogin, isLoading } = authContext;

  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!email.includes("@")) {
      newErrors.email = "Debe ser un correo válido";
    }
    
    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    await handleLogin(email, password);
  };

  return (
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button 
            type="submit" 
            className="btn-submit"
            disabled={isLoading}
          >
            {isLoading ? "Iniciando..." : "Iniciar Sesión"}
          </button>
        </form>
        <p className="switch">
          ¿No tienes cuenta? <Link to="/register">Registrarse</Link>
        </p>
      </div>
    </div>
  );
};

