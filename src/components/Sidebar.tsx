import React, { FC } from "react"
import { NavLink } from "react-router-dom";
import "styles/sidebar.css"


const Sidebar: FC = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__wrap">
                <NavLink to={"/contacts"} className="sidebar__contacts">Контакты</NavLink>
            </div>
        </aside>
    );
}

export default Sidebar