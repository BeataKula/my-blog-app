import React, { FunctionComponent, useState, useEffect } from "react";
import { MessageProps } from "../AppTypes";

const Message: FunctionComponent<MessageProps> = ({
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
