import { BrowserRouter, Route, Routes } from "react-router-dom"

import { NavigationBar } from "components/NavigationBar"

import { Customers } from "pages/Customers"
import { CustomersCreate } from "pages/CustomersCreate"

import { Locals } from "pages/Locals"

export const RouteApp = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/new" element={<CustomersCreate />} />

                <Route path="/locals" element={<Locals />} />
            </Routes>
        </BrowserRouter>
    )
}