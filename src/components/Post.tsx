import React from "react";
import styled from "styled-components";
import Button from "./Button";

export type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type PostProps = PostType;

const addComment = () => {
    alert("Dodawanie komenarzy już wkrótce!");
};

const PostElementStyle = styled.section`
    margin: 10px;
    padding: 0px;
    border: #dcedc8 solid 1px;
    background-color: #f1f8e9;
`;

const PostElementContentStyle = styled.section`
    padding: 5px;
`;

const PostElementFooterStyle = styled.section`
    display: block;
    margin: 0px;
    background-color: #f5f5f5;
    border-top: #dcedc8 solid 1px;
    min-height: 10vh;
`;

const Post: React.FunctionComponent<PostProps> = ({
    id,
    userId,
    title,
    body,
}) => {
    const buttonId = "button-" + id.toString();
    return (
        <li>
            <PostElementStyle>
                <h4>Autor: {userId}</h4>
                <h3>
                    <b>{title}</b>
                </h3>
                <PostElementContentStyle>{body}</PostElementContentStyle>
                <PostElementFooterStyle>
                    <Button
                        id={buttonId}
                        about="commentPrimary"
                        name="Dodaj komentarz"
                        onClick={addComment}
                    />
                </PostElementFooterStyle>
            </PostElementStyle>
        </li>
    );
};

export default Post;
