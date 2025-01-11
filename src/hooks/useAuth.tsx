import { AuthContext } from 'contexts/AuthContext'
import { useContext } from 'react'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      'useAuthentication must be used within an AuthContextProvider',
    )
  }

  return context
}
