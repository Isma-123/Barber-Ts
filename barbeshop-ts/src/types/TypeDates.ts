/// datos evaluaar
export type UserProfileToken = { 
     name: string,
     email: string
     token: string
}
export type UserLogin = { 
    password: string,
    email: string
}

export type User = {
  readonly id?: number; 
  name: string,
  email: string,
  IsActive?: boolean,
  rol: 'user' | 'admin'
}