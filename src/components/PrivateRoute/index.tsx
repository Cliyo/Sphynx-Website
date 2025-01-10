import { useAuthentication } from "context/AuthContext";
import { PrivateRouteProps } from "./types";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = (props: PrivateRouteProps) => {

    const { children } = props

    const location = useLocation()

    const { user } = useAuthentication()
    const { isAuthenticated } = user

    if(!isAuthenticated){
        return <Navigate to="/auth/login" state={{from: location}} replace/>
    }

    return (
        <>
            {children}
        </>
    )
}