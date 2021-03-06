import React, { FC } from "react"
import { NavLink } from "react-router-dom";


const Signup: FC = () => {
    return (
        <form className="auth-form">
            <h1 className="auth-form__title">Регистрация</h1>
            <input className="auth-form__input" placeholder="Логин" type="text" />
            <input className="auth-form__input" placeholder="Пароль" type="password" />
            <button className="auth-form__submit-button auth-form__submit-button_signup" type="submit">Продолжить</button>
            <div className="auth-nav">
                <div className="auth-nav__to-login">
                    Есть аккаунт?{'\u00A0'}
                    <NavLink to={"/login"} className="auth-nav__to-login-link">Войти</NavLink>
                </div>
            </div>
        </form>
    );
}

export default Signup;