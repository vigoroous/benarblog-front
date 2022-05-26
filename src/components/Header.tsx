import React, { FC } from "react"
import { NavLink } from "react-router-dom";
import "styles/header.css"


const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <NavLink to={"/"} className="header__logo">
                    <img src={`${process.env.PUBLIC_URL}/benar-blog-logo.svg`} className="header__logo-image" alt="logo" />
                </NavLink>
                <div className="header__search">
                    <form><input className="header__search-field" placeholder="Поиск" /></form>
                </div>
                <div className="header__login-button">
                    <NavLink to={"/login"} className="header__login-button-link">Войти</NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header