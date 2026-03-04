import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { UserProfileToken, User } from '../types/TypeDates'
import { HandleError} from './HandleError'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://localhost:7002';

// Crear instancia de axios con configuración
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para agregar token a cada request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores globales
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    HandleError(error);
    return Promise.reject(error);
  }
);

export const HandleLogin = async (email: string, password: string): Promise<UserProfileToken | null> => {
    try {  
      const { data } = await apiClient.post<UserProfileToken>('/user/login', {
         email,
         password
      })
      return data;
    }
    catch(error) {
        console.error('Login error:', error);
        return null;
    }
}

export const HandleRegister = async (email: string, password: string, name: string): Promise<boolean> => {
    try {  
      await apiClient.post('/user/register', {
         email,
         password,
         name
      })
      return true;
    }
    catch(error) {
        console.error('Register error:', error);
        return false;
    }
}

// tracking de datos 
export const GetUsers = async (): Promise<User[] | null> => {
    try {
        const { data } = await apiClient.get<User[]>('/users')
        return data
        
    } catch (error) {
        console.error('GetUsers error:', error);
        return null;
    }
}

// Logout en el servidor (opcional)
export const HandleLogout = async (): Promise<void> => {
    try {
        await apiClient.post('/user/logout');
    } catch (error) {
        console.error('Logout error:', error);
    }
}