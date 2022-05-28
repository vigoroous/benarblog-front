import React, { FC, useEffect, useState } from "react";

import { DataType } from "pages/Home"
import { ContactsType } from "pages/Home"
import { useAuth } from "context/AuthContextProvider";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import "styles/contacts.css"
import { NavLink } from "react-router-dom";


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
    const { token } = useAuth();

    const [data, setData] = useState<DataType>();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_HOST}/api/me/contacts`, {
            credentials: "include",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, //doesn't work
            },
        })
            .then(res => {
                if (res.ok)
                    return res.json()
                else
                    throw new Error("failed to get...")
            })
            .then((data: DataType) => {
                console.log(data.message);
                setData(data)
            })
            .catch(e => console.log(e))
    }, [])

    if (!data) return <div>Loading...</div>

    return (
        <Content>
            <Sidebar></Sidebar>
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
                        {data.data.map(e =>
                            <ContactsElem key={e.ID} {...e} />)}
                    </tbody>
                </table>
            </div>
        </Content>
    )
}

export default Contacts;