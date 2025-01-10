import { createContext, useContext, useState } from "react";
import { AuthContextDataProps, AuthContextProviderProps, User } from "./types";

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {

    const [ user, setUser ] = useState<User>({name: "Vidal", email: "teste@gmail.com", isAuthenticated: false})

    return (
        <AuthContext.Provider value={{user}}>
            {children}

        </AuthContext.Provider>
    )
}

export const useAuthentication = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuthentication must be used within an AuthContextProvider')
    }

    return context
}