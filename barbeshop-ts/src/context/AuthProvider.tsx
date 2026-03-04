import { AuthContext } from "./CreateContext"
import { useEffect, useState, useCallback } from "react";
import type { UserProfileToken } from "../types/TypeDates";
import { useNavigate } from "react-router-dom";
import { HandleLogin, HandleRegister, HandleLogout } from "../services/ServicesApi";     
import { toast } from "react-toastify";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => { 
    const [ready, setReady] = useState(false);
    const [user, setUser] = useState<UserProfileToken | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate(); 

    // Inicializar desde localStorage
    useEffect(() => {
        const initializeAuth = () => {
            try {
                const savedToken = localStorage.getItem('token');
                const savedUser = localStorage.getItem('user');
                
                if (savedToken && savedUser) {
                    try {
                        const userData = JSON.parse(savedUser);
                        setToken(savedToken);
                        setUser(userData);
                    } catch (parseError) {
                        console.error('Failed to parse user data:', parseError);
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                    }
                }
            } catch (error) {
                console.error('Auth initialization error:', error);
            } finally {
                setReady(true);
            }
        };

        initializeAuth();
    }, []);

    const Login = useCallback(async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const response = await HandleLogin(email, password);
            
            if (!response) {
                toast.error("Falló el inicio de sesión. Verifica tus credenciales.");
                return;
            }

            const userData: UserProfileToken = {
                email: response.email,
                token: response.token
            };

            setUser(userData);
            setToken(response.token);
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(userData));
            
            toast.success("Inicio de sesión exitoso");
            navigate('/dashboard');
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Error al iniciar sesión. Intenta nuevamente.");
        } finally {
            setIsLoading(false);
        }
    }, [navigate]);

    const Register = useCallback(async (email: string, password: string, name: string) => {
        setIsLoading(true);
        try {
            const success = await HandleRegister(email, password, name);
            
            if (!success) {
                toast.error("Error al registrar. Intenta con otro correo.");
                return;
            }

            toast.success("Registro exitoso. Por favor inicia sesión.");
            navigate('/login');
        } catch (error) {
            console.error("Register error:", error);
            toast.error("Error al registrar usuario.");
        } finally {
            setIsLoading(false);
        }
    }, [navigate]);

    const IsLoggedIn = useCallback(() => {
        return !!(user && token);
    }, [user, token]);

    const Logout = useCallback(async () => {
        try {
            await HandleLogout();
        } catch (error) {
            console.error('Logout request error:', error);
        } finally {
            setUser(null);
            setToken(null);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            toast.success("Sesión cerrada");
            navigate('/login');
        }
    }, [navigate]);

    return (
        <AuthContext.Provider value={{  
            user,
            Login,
            IsLoggeIn: IsLoggedIn,
            Register,
            Logout,
            isLoading
        }}>
            {ready ? children : null}
        </AuthContext.Provider>
    )
}