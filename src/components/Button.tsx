import React, { ComponentType } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
    background: ${(props) =>
        props.about === "commentPrimary" ? "#424242" : "white"};
    color: ${(props) =>
        props.about === "commentPrimary" ? "white" : "#424242"};
    font-size: 1em;
    margin: 1em;
    radius: 5px;
    padding: 0.25em 1em;
    border: 2px solid #bdbdbd;
    border-radius: 5px;
`;

type ButtonType = {
    id: string;
    name: string;
    about: "commentPrimary" | "commentHover";
    onClick: () => void;
};

const Button: ComponentType<ButtonType> = ({ id, name, about, onClick }) => {
    return (
        <ButtonStyle about={about} id={id} onClick={onClick}>
            {name}
        </ButtonStyle>
    );
};

export default Button;
