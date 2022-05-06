import React from "react";
import styled from "styled-components";
import { IPost } from "../AppTypes";
import Button from "./Button";

type PostProps = IPost;

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

export const PostAuthor = styled.h3`
    text-align: left;
    padding: 5px;
`;

export const PostTitle = styled.h4`
    text-align: left;
    padding: 5px;
    margin: 0px;
    background-color: #dcedc8;
    padding: 5px;
    font-weight: bold;
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
                <PostAuthor> Autor: {userId}</PostAuthor>
                <PostTitle>
                    <b>{title}</b>
                </PostTitle>
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
