import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Servicios from '../components/Servicios';
import { Login } from '../components/Login';
import Register from '../components/Register';

export default function AppRoutes() {
  return ( 
    <ReactRoutes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </ReactRoutes>
  );
}
