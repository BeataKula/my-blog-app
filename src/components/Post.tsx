import React from "react";

type PostProps = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const Post: React.ComponentType<PostProps> = ({ userId, title, body }) => {
    return (
        <li className="post-element">
            <h4>Autor: {userId}</h4>
            <h3>
                <b>{title}</b>
            </h3>
            <br />
            {body}
        </li>
    );
};

export default Post;
