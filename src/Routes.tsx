import { BrowserRouter, Route, Routes } from "react-router-dom"

import { NavigationBar } from "components/NavigationBar"

import { Customers } from "pages/Customers"
import { CustomersCreate } from "pages/CustomersCreate"

import { Locals } from "pages/Locals"

import { Access } from "pages/Access"

import { Groups } from "pages/Groups"

export const RouteApp = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/new" element={<CustomersCreate />} />

                <Route path="/locals" element={<Locals />} />

                <Route path="/access" element={<Access />} />

                <Route path="/groups" element={<Groups />} />
            </Routes>
        </BrowserRouter>
    )
}