/**
 * Funciones de validación y manipulación de tokens
 */

interface JwtPayload {
  exp?: number;
  iat?: number;
  [key: string]: string | number | undefined;
}

export const decodeToken = (token: string): JwtPayload | null => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    const payload = JSON.parse(atob(parts[1])) as JwtPayload;
    return payload;
  } catch {
    return null;
  }
};

/**
 * Verifica si un token ha expirado
 */
export const isTokenExpired = (token: string): boolean => {
  const payload = decodeToken(token);
  if (!payload || !payload.exp) return true;
  
  // exp está en segundos, Date.now() en milisegundos
  // Agregar 60 segundos de buffer
  return payload.exp * 1000 < Date.now() + 60000;
};


export const getTokenExpirationTime = (token: string): number | null => {
  const payload = decodeToken(token);
  if (!payload || !payload.exp) return null;
  
  const expirationTime = payload.exp * 1000 - Date.now();
  return Math.max(0, Math.floor(expirationTime / 1000));
};


export const isValidToken = (token: string | null): boolean => {
  if (!token) return false;
  return !isTokenExpired(token);
};

/**
 * Limpia el almacenamiento de autenticación
 */
export const clearAuthStorage = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};


export const getStoredToken = (): string | null => {
  return localStorage.getItem('token');
};

/**
 * Obtiene los datos del usuario del almacenamiento
 */
export const getStoredUser = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};
