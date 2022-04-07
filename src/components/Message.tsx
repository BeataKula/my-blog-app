import React, { ComponentType, useState, useEffect } from "react";

export type categoryType = "info" | "positive" | "negative" | "warning";

type MessageProps = {
    showMessage: boolean;
    category: categoryType;
    headerText: String;
    text: String;
    color: String;
    size: "mini" | "tiny" | "small" | "large" | "big" | "huge" | "massive";
};

const Message: ComponentType<MessageProps> = ({
    showMessage,
    category,
    headerText,
    text,
    color,
    size,
}) => {
    const [visibility, setVisibility] = useState("hidden");
    const [messageClass, setMessageClass] = useState("");

    useEffect(() => {
        const newVisibility = showMessage ? " visible " : " hidden ";
        setVisibility(newVisibility);
        setMessageClass(`ui ${category} ${color} ${newVisibility} message`);
    }, [showMessage, category, color]);

    const onCloseIconClick = () => {
        setVisibility("hidden");
        setMessageClass(`ui ${category} ${color} ${visibility} message`);
    };
    //Do kasacji

    return (
        <div className={messageClass}>
            <i className="close icon" onClick={onCloseIconClick} />
            <div className="header">{headerText}</div>
            <p>{text}</p>
        </div>
    );
};

export default Message;
//Tylko dla PR - tmp
