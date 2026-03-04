import { createContext } from 'react';
import type { UserProfileToken } from '../types/TypeDates'

type GeneralAction = { 
    user: UserProfileToken | null;
    Login: (email: string, password: string) => Promise<void>;
    Logout: () => Promise<void>; 
    Register: (email: string, password: string, name: string) => Promise<void>; 
    IsLoggeIn: () => boolean;
    isLoading: boolean;
}

export const AuthContext = createContext<GeneralAction | undefined>(undefined);