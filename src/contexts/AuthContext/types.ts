export type AuthContextDataProps = {
  // eslint-disable-next-line no-use-before-define
  user: User
}

export type AuthContextProviderProps = {
  children: React.ReactNode
}

export type User = {
  name: string
  email: string
  isAuthenticated: boolean
}
