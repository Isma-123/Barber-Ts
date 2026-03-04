/// datos evaluaar
export type UserProfileToken = { 
     email: string
     token: string
}
export type UserRegister = { 
    password: string,
    email: string
    name?: string
} 

export type User = {
  readonly id?: number; 
  name: string,
  email: string,
  IsActive?: boolean,
  rol: 'user' | 'admin'
}

export type ApiResponse<T> = {
  data: T;
  status: number;
}