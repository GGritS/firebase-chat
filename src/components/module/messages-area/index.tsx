import React, { FC, useEffect, useState } from "react";
import { UserAuth } from "../../../contexts/auth/AuthContext";
import { db } from "../../../firebase/firebase";
import { Message } from "../../common/Message";
import { collection, onSnapshot } from "firebase/firestore";

import style from "./index.module.scss";

type MessageType = {
  id: string;
  image: string;
  message: string;
  userId: string;
  userName: string;
};

export const MessagesArea: FC = () => {
  const { user } = UserAuth();

  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      onSnapshot(collection(db, "messages"), (snapshot) => {
        const messages: MessageType[] | any = [];
        snapshot.docs.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
        console.log(messages);
      });
    };
    getMessages();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {messages.map(
          (message: MessageType) =>
            !!messages.length && (
              <Message
                isMyMessage={user.uid === message.userId}
                key={message.id}
                messageText={message.message}
                userName={message.userName}
                image={message.image}
              />
            )
        )}
      </div>
    </div>
  );
};
