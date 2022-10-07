import React, { FC, useState } from "react";
import { db } from "../../../firebase/firebase";
import style from "./index.module.scss";
import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "../../../contexts/auth/AuthContext";

export const SendMessageArea: FC = () => {
  const { user } = UserAuth();

  const [message, setMessage] = useState<string>("");

  const sendMessage = async () => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        userId: user.uid,
        userName: user.displayName,
        image: user.photoURL,
        message: message,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setMessage("");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <textarea
          name="message-input"
          id="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={style.messageInput}
        ></textarea>
        <button className={style.sendMessageButton} onClick={sendMessage}>
          Send message
        </button>
      </div>
    </div>
  );
};
