import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import "styles/layout.css"


const Layout: FC = () => {
    return (
        <>
            <Header />
            <main className="layout">
                <div className="layout__left-column">
                    <Sidebar />
                </div>
                <div className="layout__content">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Layout