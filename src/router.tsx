import React, { FC } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "components/Layout"
import Home from "pages/Home"
import Login from "pages/Login"
import Signup from "pages/Signup"
import Contacts from "pages/Contacts"


const AppRouter: FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route element={<Layout />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<Layout />}>
                <Route path="/signup" element={<Signup />} />
            </Route>
            <Route element={<Layout />}>
                <Route path="/contacts" element={<Contacts />} />
            </Route>
        </Routes>
    )
}

export default AppRouter