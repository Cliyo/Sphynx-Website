import { createContext, useCallback, useEffect, useState } from 'react'
import { AuthContextDataProps, AuthContextProviderProps } from './types'
import { api } from 'services/axios'
import { LoginFormData } from 'pages/Login/types'
import { SignInDTO, UserDTO } from 'dtos/SignInDTO'
import { JWTdecoder } from 'utils/JWTdecoder'
import {
  getAuthDataStorage,
  removeAuthDataStorage,
  saveAuthDataStorage,
} from 'storage/storage'

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  const persistUserData = useCallback((token: string | null) => {
    if (token) {
      const jwtDecoded = JWTdecoder(token)

      if (jwtDecoded?.sub) {
        setUser({
          isAuthenticated: true,
          ...jwtDecoded,
        })

        api.defaults.headers.common.Authorization = `Bearer ${token}`
      }
    }
  }, [])

  const loadUserData = useCallback(() => {
    const token = getAuthDataStorage()

    persistUserData(token)
  }, [persistUserData])

  const fetchLogin = useCallback(
    async (formData: LoginFormData) => {
      try {
        const { data } = await api.post<SignInDTO>('/login', formData)

        if (data?.token) {
          const { token } = data

          saveAuthDataStorage(token)

          persistUserData(token)
        }
      } catch (error) {
        console.log(error)
      }
    },
    [persistUserData],
  )

  const signOut = useCallback(() => {
    removeAuthDataStorage()
    setUser({} as UserDTO)
    api.defaults.headers.common.Authorization = ''
  }, [])

  useEffect(() => {
    loadUserData()
  }, [loadUserData])

  return (
    <AuthContext.Provider value={{ user, fetchLogin, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
