import axios from 'axios';
import type { UserLogin, User } from '../types/TypeDates'
import { HandleError} from './HandleError'
const _api = 'https://localhost//7002';
export const HandleLogin = async (email: string, password: string)  => {
    try {  
      const data = await axios.post<UserLogin>(_api + '/user/login', {
         email: email,
         password: password
      })
      return data;
    }
    catch(error) {
        HandleError(error) // errores globales 
    }
}

// tracking de datos 
export const GetUsers = async () => {
    try {
        const { data } = await axios.get<User[]>(_api + '/users')
        return data
        
    } catch (error) {
        HandleError(error);
    }
}
// task to do...