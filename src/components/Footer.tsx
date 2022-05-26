import React, { FC } from "react"
import "styles/footer.css"


const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <p className="footer__copyright">© 2022 BenarBlog</p>
            </div>
        </footer>
    )
}

export default Footer