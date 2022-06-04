import React, { FC } from "react"
import { NavLink } from "react-router-dom";
import "styles/header.css"
import { IconUser, IconCreate } from "icons/ui-header";


const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <NavLink to={"/"} className="header__logo">
                    <img src={`${process.env.PUBLIC_URL}/benar-blog-logo.svg`} className="header__logo-image" alt="logo" />
                </NavLink>
                <div className="header__section-center">
                    <div className="header__search">
                        <form><input className="header__search-field" placeholder="Поиск" /></form>
                    </div>
                    <div className="header__button header__button_create">
                        <NavLink to={"/create"} className="header__button-link">
                            <IconCreate />
                            <span className="header__button-link-name">Создать</span>
                        </NavLink>
                    </div>
                </div>
                <div className="header__section-right">
                    <div className="header__button">
                        <NavLink to={"/login"} className="header__button-link">
                            <IconUser />
                            <span className="header__button-link-name">Войти</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header