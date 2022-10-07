import React, { FC } from "react";
import { UserAuth } from "../../../contexts/auth/AuthContext";
import { MessagesArea } from "../../module/messages-area";
import { SendMessageArea } from "../../module/send-message-area";

import style from "./index.module.scss";

export const Chat: FC = () => {
  const { user } = UserAuth();

  return (
    <div className={style.wrapper}>
      <div className={style.userName}>Welcome, {user?.displayName}</div>
      <MessagesArea />
      <SendMessageArea />
    </div>
  );
};
