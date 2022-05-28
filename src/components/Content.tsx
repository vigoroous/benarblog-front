import React, { Children, FC } from "react"
import { NavLink } from "react-router-dom";
import "styles/content.css"


type Props = {
    children?: React.ReactNode;
}

const Content: FC<Props> = ({ children }) => {
    return (
        <main className="content">
            <div className="content__wrap">
                {children}
            </div>
        </main>
    );
}

export default Content