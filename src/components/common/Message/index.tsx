import React, { FC } from "react";

import cn from "classnames";
import style from "./index.module.scss";
import { Timestamp } from "firebase/firestore";

type MessageProps = {
  isMyMessage: boolean;
  messageText: string;
  userName: string;
  image: string;
  sendedAt: Timestamp;
};

export const Message: FC<MessageProps> = ({
  isMyMessage,
  messageText,
  userName,
  image,
  sendedAt,
}) => {
  const time = new Date(sendedAt.seconds * 1000)
    .toTimeString()
    .split(" ")[0]
    .split(":")
    .slice(0, 2)
    .join(":");
  return (
    <div
      className={cn(style.wrapper, {
        [style.myMessage]: isMyMessage === true,
        [style.notMyMessage]: isMyMessage === false,
      })}
    >
      <div className={style.content}>
        <div className={style.avatarBlock}>
          <img src={image} alt="" className={style.avatar} />
        </div>
        <div className={style.textContent}>
          <div className={style.userName}>{userName}</div>
          <div>{messageText}</div>
          <div className={style.time}>at {time}</div>
        </div>
      </div>
    </div>
  );
};
