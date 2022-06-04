import React, { FC } from "react"
import { NavLink } from "react-router-dom";
import "styles/sidebar.css"
import Footer from "./Footer";
import { IconPopular, IconRecent, IconSubs, IconFavorite } from "icons/ui-sidebar";


const Sidebar: FC = () => {

    return (
        <aside className="sidebar">
            <div className="sidebar__menu">
                <div className="sidebar__menu-item">
                    <NavLink to={"/popular"} className="sidebar__menu-item-link">
                        <IconPopular />
                        <span className="sidebar__menu-item-name">Популярные</span>
                    </NavLink>
                </div>
                <div className="sidebar__menu-item">
                    <NavLink to={"/new"} className="sidebar__menu-item-link">
                        <IconRecent />
                        <span className="sidebar__menu-item-name">Новые</span>
                    </NavLink>
                </div>
                <div className="sidebar__menu-item">
                    <NavLink to={"/subs"} className="sidebar__menu-item-link">
                        <IconSubs />
                        <span className="sidebar__menu-item-name">Подписки</span>
                    </NavLink>
                </div>
                <div className="sidebar__menu-item">
                    <NavLink to={"/likes"} className="sidebar__menu-item-link">
                        <IconFavorite />
                        <span className="sidebar__menu-item-name">Понравилось</span>
                    </NavLink>
                </div>
            </div>
            <Footer />
        </aside>
    );
}

export default Sidebar