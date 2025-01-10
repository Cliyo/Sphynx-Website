import { useContext } from 'react'
import { AlertContext } from 'contexts/AlertContext'

export const useAlert = () => {
  const alertContext = useContext(AlertContext)

  return alertContext
}
