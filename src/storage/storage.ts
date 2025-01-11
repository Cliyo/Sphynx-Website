import { AUTH_TOKEN_STORAGE } from './storageConfig'

export const saveAuthDataStorage = (token: string) => {
  localStorage.setItem(AUTH_TOKEN_STORAGE, token)
}

export const getAuthDataStorage = () => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_STORAGE)

    console.log(token)

    return token ?? null
  } catch (error) {
    console.log('getAuthDataStorage: ', error)

    return null
  }
}

export const removeAuthDataStorage = () => {
  localStorage.removeItem(AUTH_TOKEN_STORAGE)
}
