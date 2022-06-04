import React, { FC, useEffect, useState } from "react"
import { useAuth } from "providers/AuthProvider";
import 'styles/home.css'
import { IconSubscribe, IconLike, IconComment } from "icons/ui-post";


const Home: FC = () => {
    // const { token } = useAuth();

    // const [data, setData] = useState<DataType>();

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_HOST}/api/posts/contacts`, {
    //         credentials: "include",
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`, //doesn't work
    //         },
    //     })
    //         .then(res => {
    //             if (res.ok)
    //                 return res.json()
    //             else
    //                 throw new Error("failed to get...")
    //         })
    //         .then((data: DataType) => {
    //             console.log(data.message);
    //             setData(data)
    //         })
    //         .catch(e => console.log(e))
    // }, [])

    // if (!data) return (
    //     <div>Loading...</div>
    // )

    return (
        <div className="posts-entry">
            <div className="post">
                <div className="post__header">
                    <div className="post__header-author">
                        <div className="post__header-author-avatar"></div>
                        <div className="post__header-author-name">Blog Name</div>
                    </div>
                    <div className="post__header-date">5 часов</div>
                    <button className="post__header-subscribe">
                        <IconSubscribe />
                        <span className="post__header-subscribe-label">Подписаться</span>
                    </button>
                </div>
                <div className="post__content">
                    <div className="post__content-title">Тема новости</div>
                    <div className="post__content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </div>
                    <div className="post__content-image"></div>
                </div>
                <div className="post__footer">
                    <div className="post__footer-likes">
                        <IconLike />
                        <div className="post__footer-likes-count">27</div>
                    </div>
                    <div className="post__footer-comments">
                        <IconComment />
                        <div className="post__footer-comments-count">159</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;