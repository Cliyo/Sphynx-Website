import { useNavigate } from "react-router-dom"

import { app } from "services/axios"

import { LoginFormData } from "pages/Login/types"

export const useAuth = () => {
    const navigate = useNavigate()

    const fetchLogin = async (data: LoginFormData) => {
        await app.post('/login', data)

        navigate('/dashboard')
    }

    return {
        fetchLogin
    }
}