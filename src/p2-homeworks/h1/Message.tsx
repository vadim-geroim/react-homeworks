import React from "react";
import messageStyle from "./Message.module.css";

type MessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessageType) {
  return (
    <div className={messageStyle.message}>
      <img className={messageStyle.avatar} src={props.avatar} alt="Avatar" />
      <div className={messageStyle.content}>
        <h4 className={messageStyle.name}>{props.name}</h4>
        <p className={messageStyle.text}>{props.message}</p>
        <p className={messageStyle.time}>{props.time}</p>
        <div className={messageStyle.curve}></div>
      </div>
    </div>
  );
}

export default Message;
