import React, { FC, useEffect, useRef, useState } from "react";
import { UserAuth } from "../../../contexts/auth/AuthContext";
import { db } from "../../../firebase/firebase";
import { Message } from "../../common/Message";
import { collection, onSnapshot, Timestamp } from "firebase/firestore";

import style from "./index.module.scss";

type MessageType = {
  id: string;
  image: string;
  message: string;
  userId: string;
  userName: string;
  sendedAT: Timestamp;
};

export const MessagesArea: FC = React.memo(() => {
  const messagesWrap = useRef<HTMLDivElement>(null);
  const { user } = UserAuth();

  const [messages, setMessages] = useState<MessageType[]>([]);
  useEffect(() => {
    const getMessages = async () => {
      onSnapshot(collection(db, "messages"), (snapshot) => {
        // const fechedMessages = snapshot.docs.map((doc) =>
        //   doc.data()
        // ) as MessageType[];

        const messages = [] as MessageType[];
        snapshot.forEach((doc: any) =>
          messages.push({ ...doc.data(), id: doc.id })
        );
        const sortedMessages = messages.sort(
          (a, b) => a?.sendedAT?.seconds - b?.sendedAT?.seconds
        );

        setMessages(sortedMessages);
      });
    };
    getMessages();
  }, []);

  useEffect(() => {
    messagesWrap.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log("render");

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
                sendedAt={message.sendedAT}
              />
            )
        )}
        <div ref={messagesWrap} />
      </div>
    </div>
  );
});
