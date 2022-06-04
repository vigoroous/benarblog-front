import React, { FC, useRef, useState } from "react"
import { useAuth } from "providers/AuthProvider";
// import { DataType } from "pages/Contacts"
import { ContactsType } from "pages/Contacts"



const Create: FC = () => {
    // const { token } = useAuth();

    // const form = useRef<HTMLFormElement>(null)
    // const [buttonState, setButtonState] = useState(false)

    // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    //     event.preventDefault()
    //     if (!form.current) return
    //     const formData = new FormData(form.current)

    //     const jsonData = JSON.stringify(Object.fromEntries(formData));

    //     form.current.reset()
    //     setButtonState(true)

    //     fetch(`${process.env.REACT_APP_API_HOST}/api/contacts/new`, {
    //         credentials: "include",
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`,
    //         },
    //         body: jsonData,
    //     })
    //         .then(res => {
    //             if (res.ok)
    //                 return res.json()
    //             else
    //                 throw new Error("failed to get...")
    //         })
    //         .then((data: DataType) => {
    //             console.log(data.message);
    //             setButtonState(false);
    //         })
    //         .catch(e => console.log(e))
    // }

    return (
        // <div className="page-wrapper_auth">
        //     <form className="auth-form" ref={form} onSubmit={handleSubmit}>
        //         <h1 className="auth-form__title">Новый контакт</h1>
        //         <input className="auth-form__input" type="text" name="name" placeholder="Имя" />
        //         <input className="auth-form__input" type="text" name="phone" placeholder="Телефон" />
        //         <button className="auth-form__submit-button" type="submit" disabled={buttonState}>Создать</button>
        //     </form>
        // </div>
        <></>
    );
}

export default Create;