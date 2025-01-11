import { UserDTO } from 'dtos/SignInDTO'
import { LoginFormData } from 'pages/Login/types'

export type AuthContextDataProps = {
  user: UserDTO
  fetchLogin: (data: LoginFormData) => Promise<void>
  signOut: () => void
}

export type AuthContextProviderProps = {
  children: React.ReactNode
}
