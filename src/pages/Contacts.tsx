import React, { FC, useEffect, useState } from "react";
import { useAuth } from "providers/AuthProvider";
import "styles/contacts.css"
import { NavLink } from "react-router-dom";


export type RequestType = {
    "data": ContactsType[],
    "message": string,
    "status": boolean
}

export type ContactsType = {
    "ID": number,
    "CreatedAt": string,
    "UpdatedAt": string,
    "DeletedAt": string,
    "name": string,
    "phone": string,
    "user_id": number
}

const ContactsElem: FC<ContactsType> = ({ ID, name, phone }) => {

    return (
        <tr className="contats-table__row">
            <th className="contats-table__head-cell" scope="row">{ID}</th>
            <td className="contacts__elem">{name}</td>
            <td className="contacts__elem">{phone}</td>
            <td className="contacts__elem">
                <NavLink to={`/contacts/edit/${ID}`}>Edit</NavLink>
            </td>
        </tr>
    )
}

const Contacts: FC = () => {
    const { data } = useAuth();
    // console.log(token)

    const [requestData, setRequestData] = useState<RequestType>();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_HOST}/api/me/contacts`, {
            credentials: "include",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}`, //doesn't work
            },
        })
            .then(res => {
                if (res.ok)
                    return res.json()
                else
                    throw new Error("failed to get...")
            })
            .then((data: RequestType) => {
                console.log(data.message);
                setRequestData(data)
            })
            .catch(e => console.log(e))
    }, [])

    if (!requestData) return (
        <div>Loading...</div>
    )

    return (
        <div className="contats-table-wrap">
            <table className="contats-table">
                <thead className="contats-table__head">
                    <tr className="contats-table__row">
                        <th className="contats-table__head-cell" scope="col">ID</th>
                        <th className="contats-table__head-cell" scope="col">Name</th>
                        <th className="contats-table__head-cell" scope="col">Phone</th>
                        <th className="contats-table__head-cell" scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody className="contats-table__body">
                    {requestData.data.map(e =>
                        <ContactsElem key={e.ID} {...e} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts;