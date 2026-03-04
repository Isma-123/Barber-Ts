import { createContext } from 'react';
import type { UserLogin } from '../types/TypeDates'
type GeneralAction = { 
    user: UserLogin;
    Login: (email: string, password: string) =>  void;
    Logout: () => void; 
    Register: (email: string, password: string, name: string) => void; 
    IsLoggeIn: () => boolean;
}
export const AuthContext = createContext<GeneralAction>({} as GeneralAction)