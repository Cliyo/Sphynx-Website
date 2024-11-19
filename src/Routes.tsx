import { NavigationBar } from "components/NavigationBar"
import { Customers } from "pages/Customers"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const RouteApp = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/customers" element={<Customers />} />
            </Routes>
        </BrowserRouter>
    )
}