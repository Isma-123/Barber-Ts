/**
 * Validaciones comunes para formularios
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[a-zA-Z\s]*$/;

export const validateEmail = (email: string): string | null => {
  if (!email) {
    return 'El correo es obligatorio';
  }
  if (!EMAIL_REGEX.test(email)) {
    return 'Debes ser un correo válido';
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return 'La contraseña es obligatoria';
  }
  if (password.length < 6) {
    return 'La contraseña debe tener al menos 6 caracteres';
  }
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name) {
    return 'El nombre es obligatorio';
  }
  if (name.length < 3) {
    return 'El nombre debe tener al menos 3 caracteres';
  }
  if (name.length > 50) {
    return 'El nombre no puede exceder 50 caracteres';
  }
  if (!NAME_REGEX.test(name)) {
    return 'El nombre solo puede contener letras y espacios';
  }
  return null;
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): string | null => {
  if (!confirmPassword) {
    return 'Debes confirmar la contraseña';
  }
  if (password !== confirmPassword) {
    return 'Las contraseñas no coinciden';
  }
  return null;
};
