import axios from "axios";
import { toast } from "react-toastify";

interface ErrorData {
  errors?: Array<{ message?: string; descripcion?: string }>;
  message?: string;
  error?: string | Record<string, string[]>;
}

export const HandleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const response = error.response;
    const status = response?.status;
    const data = response?.data as ErrorData | undefined;

    // Manejar 401 Unauthorized
    if (status === 401) {
      toast.error("Sesión expirada. Por favor, inicia sesión nuevamente.");
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
      return;
    }

    // Manejar 403 Forbidden
    if (status === 403) {
      toast.error("No tienes permisos para acceder a este recurso.");
      return;
    }

    // Manejar errores de validación (422, 400)
    if (status === 422 || status === 400) {
      if (Array.isArray(data?.errors)) {
        data.errors.forEach((errorItem: { message?: string; descripcion?: string }) => {
          const message = errorItem.message || errorItem.descripcion || JSON.stringify(errorItem);
          toast.error(message);
        });
      } else if (typeof data?.message === 'string') {
        toast.error(data.message);
      } else if (data?.error) {
        if (typeof data.error === 'string') {
          toast.error(data.error);
        } else if (typeof data.error === 'object') {
          Object.values(data.error).forEach((msg: string | string[]) => {
            const errorMsg = Array.isArray(msg) ? msg[0] : msg;
            toast.error(String(errorMsg));
          });
        }
      }
      return;
    }

    // Manejar errores 500
    if (status === 500) {
      toast.error("Error del servidor. Por favor, intenta más tarde.");
      return;
    }

    // Manejar otros errores
    if (data?.message) {
      toast.error(data.message);
    } else if (data?.error) {
      toast.error(String(data.error));
    } else if (error.message) {
      toast.error(error.message);
    } else {
      toast.error("Ocurrió un error desconocido.");
    }
  } else if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error("Ocurrió un error desconocido.");
  }
};