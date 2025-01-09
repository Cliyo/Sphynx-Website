import { BrowserRouter, Route, Routes } from "react-router-dom"

import { NavigationBar } from "components/NavigationBar"

import { Login } from "pages/Login"

import { Customers } from "pages/Customers"
import { CustomersCreate } from "pages/CustomersCreate"

import { Locals } from "pages/Locals"

import { Access } from "pages/Access"

import { Groups } from "pages/Groups"
import { GroupsCreate } from "pages/GroupsCreate"

export const RouteApp = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/auth/login" element={<Login />} />

                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/new" element={<CustomersCreate />} />

                <Route path="/locals" element={<Locals />} />

                <Route path="/access" element={<Access />} />

                <Route path="/groups" element={<Groups />} />
                <Route path="/groups/new" element={<GroupsCreate />} />
            </Routes>
        </BrowserRouter>
    )
}