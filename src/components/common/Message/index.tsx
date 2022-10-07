import React, { FC } from "react";

import cn from "classnames";
import style from "./index.module.scss";

type MessageProps = {
  isMyMessage: boolean;
  messageText: string;
  userName: string;
  image: string;
};

export const Message: FC<MessageProps> = ({
  isMyMessage,
  messageText,
  userName,
  image,
}) => {
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
          <div>{userName}</div>
          <div>{messageText}</div>
        </div>
      </div>
    </div>
  );
};
