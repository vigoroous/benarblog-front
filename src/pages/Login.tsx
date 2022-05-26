import React, { FC, useRef, useState } from "react"
import { NavLink } from "react-router-dom";
import 'styles/auth-form.css'


type DataType = {
    account: {
        CreatedAt: string,
        DeletedAt: string,
        ID: number,
        UpdatedAt: string,
        email: string,
        password: string,
        token: string,
    }
    message: string,
    status: boolean,
}

const Login: FC = () => {
    const form = useRef<HTMLFormElement>(null)
    const [buttonState, setButtonState] = useState(false)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        if (!form.current) return
        const formData = new FormData(form.current)

        //FormData to JSON conversion
        const temp: any = {};
        for (const [key, value] of Array.from(formData.entries())) {
            temp[key] = value;
        }
        const jsonData = JSON.stringify(temp);

        form.current.reset()
        setButtonState(true)
        fetch(`${process.env.REACT_APP_API_HOST}/api/user/login`, {
            method: 'POST',
            body: jsonData
        })
            .then(res => {
                if (res.ok)
                    return res.json()
                else
                    throw new Error("failed to get...")
            })
            .then((data: DataType) => {
                console.log(data.account.token)
                setButtonState(false)
            })
            
            .catch(e => console.log(e))
        
    }

    return (
        <main className="login content">
            <div className="auth-wrapper">
                <form className="auth-form" ref={form} onSubmit={handleSubmit}>
                    <h1 className="auth-form__title">Вход</h1>
                    <input className="auth-form__input" type="email" name="email" placeholder="Email" />
                    <input className="auth-form__input" type="password" name="password" placeholder="Пароль" />
                    <button className="auth-form__submit-button" type="submit" disabled={buttonState}>Войти</button>
                </form>
                <div className="auth-nav">
                    <div className="auth-nav__to-signup">
                        <NavLink to={"/signup"} className="auth-nav__to-signup-link">Регистрация</NavLink>
                    </div>
                    <div className="auth-nav__forgot-pass">
                        <NavLink to={"/forgot"} className="auth-nav__forgot-pass-link">Забыли пароль?</NavLink>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;