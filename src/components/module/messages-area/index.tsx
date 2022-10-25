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
  sendedAT: { seconds: number; nanoseconds: number };
};

export const MessagesArea: FC = () => {
  const { user } = UserAuth();

  const [messages, setMessages] = useState<MessageType[]>([]);
  useEffect(() => {
    const getMessages = async () => {
      onSnapshot(collection(db, "messages"), (snapshot) => {
        const messages = [] as MessageType[];
        snapshot.forEach((doc: any) =>
          messages.push({ ...doc.data(), id: doc.id })
        );
        const sortedMessages = messages.sort(
          (a, b) => a.sendedAT.seconds - b.sendedAT.seconds
        );

        setMessages(sortedMessages);
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
