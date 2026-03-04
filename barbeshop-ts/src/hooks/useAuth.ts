/**
 * Hook personalizado para usar AuthContext de forma segura
 */
import { useContext } from 'react';
import { AuthContext } from '../context/CreateContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  
  return context;
};
