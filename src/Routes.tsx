import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { NavigationBar } from 'components/NavigationBar'

import { Login } from 'pages/Login'

import { Customers } from 'pages/Customers'
import { CustomersCreate } from 'pages/CustomersCreate'

import { Locals } from 'pages/Locals'

import { Access } from 'pages/Access'

import { Groups } from 'pages/Groups'
import { GroupsCreate } from 'pages/GroupsCreate'
import { useAuthentication } from 'contexts/AuthContext'
import { PrivateRoute } from 'components/PrivateRoute'

export const RouteApp = () => {
  const { user } = useAuthentication()

  const { isAuthenticated } = user

  return (
    <BrowserRouter>
      {isAuthenticated && <NavigationBar />}
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? '/customers' : '/auth/login'} />
          }
        />

        <Route
          path="/auth/login"
          element={
            isAuthenticated ? <Navigate to={'/customers'} replace /> : <Login />
          }
        />

        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        />
        <Route path="/customers/new" element={<CustomersCreate />} />
        <Route path="/customers/edit/:id" element={<CustomersCreate />} />

        <Route path="/locals" element={<Locals />} />

        <Route path="/access" element={<Access />} />

        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/new" element={<GroupsCreate />} />
        <Route path="/groups/edit/:id" element={<GroupsCreate />} />
      </Routes>
    </BrowserRouter>
  )
}
