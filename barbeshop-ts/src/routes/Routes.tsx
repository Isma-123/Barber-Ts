import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import type { ReactNode } from 'react';
import Inicio from '../components/Inicio';
import Servicios from '../components/Servicios';
import { Login } from '../components/Login';
import Register from '../components/Register';
import { AuthContext } from '../context/CreateContext';

// Componente para rutas protegidas
const ProtectedRoute = ({ 
  element, 
  requiredAuth = false 
}: { 
  element: ReactNode
  requiredAuth?: boolean
}) => {
  const authContext = useContext(AuthContext);
  
  if (!authContext) {
    return <Navigate to="/login" replace />;
  }

  const isLoggedIn = authContext.IsLoggeIn();

  if (requiredAuth && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!requiredAuth && isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{element}</>;
};

export default function AppRoutes() {
  return ( 
    <ReactRoutes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/login" element={<ProtectedRoute element={<Login />} />} />
      <Route path="/register" element={<ProtectedRoute element={<Register />} />} />
    
      <Route path="*" element={<Navigate to="/" replace />} />
    </ReactRoutes>
  );
}
