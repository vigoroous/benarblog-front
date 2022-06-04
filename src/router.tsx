import React, { FC } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "components/Layout"
import Home from "pages/Home"
import Login from "pages/Login"
import Signup from "pages/Signup"
import Contacts from "pages/Contacts"
import Create from "pages/Create"


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
                <Route path="/popular" element={<Contacts />} />
            </Route>
            <Route element={<Layout />}>
                <Route path="/new" element={<Contacts />} />
            </Route>
            <Route element={<Layout />}>
                <Route path="/subs" element={<Contacts />} />
            </Route>
            <Route element={<Layout />}>
                <Route path="/likes" element={<Contacts />} />
            </Route>
            <Route element={<Layout />}>
                <Route path="/create" element={<Create />} />
            </Route>
        </Routes>
    )
}

export default AppRouter