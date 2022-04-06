import React, {ComponentType, useState, useEffect} from 'react';

enum categoryType {
  "info",
  "positive", 
  "negative",
  "warning"
};

enum sizeType {
  "mini",
  "tiny", 
  "small",
  "large",
  "big", 
  "huge",
  "massive",
};

export type categoryTypeString = keyof typeof categoryType;
export type sizeTypeString = keyof typeof sizeType;

type MessageProps = {
  showMessage: boolean,
  category: categoryTypeString,
  headerText: String,
  text: String,
  color: String,
  size: sizeTypeString
}

const Message: ComponentType <MessageProps>  = ({ showMessage, category, headerText, text, color, size }) => {
  const [visibility, setVisibility] = useState("");
  const [messageClass, setMessageClass] = useState("");

  useEffect(() => {
    setVisibility(showMessage ? " visible " : " hidden ");
    setMessageClass(`ui ${category} ${color} ${visibility} message`);
  }, []); 

  const onCloseIconClick = () => {
    setVisibility("hidden");
    setMessageClass(`ui ${category} ${color} ${visibility} message`);
  }

  return (
    <div className={messageClass}>
        <i 
          className="close icon" 
          onClick = {onCloseIconClick}
        />
        <div className="header">{headerText}</div>
        <p>{text}</p>
    </div>     
  );
};

export default Message;