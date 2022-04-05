import React from "react";

type PostProps  = {
    post: {
        userId: number,
        id: number,
        title: string,
        body: string
    }
}
  

const Post: React.ComponentType<PostProps>  = ({ post }) => {
    return (
        <li className="post-element">
            <h4>Autor: {post.userId}</h4>
            <h3>
                <b>{post.title}</b>
            </h3>
            
            <br />
            {post.body}
        </li>
    );
};

export default Post;
