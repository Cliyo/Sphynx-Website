import { NavigationBar } from "components/NavigationBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const RouteApp = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                
            </Routes>
        </BrowserRouter>
    )
}