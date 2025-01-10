export type AuthContextDataProps = {
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