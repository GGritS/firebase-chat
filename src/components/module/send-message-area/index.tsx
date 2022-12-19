import React, { FC, useState } from "react";
import { db } from "../../../firebase/firebase";
import style from "./index.module.scss";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { UserAuth } from "../../../contexts/auth/AuthContext";
import { Button } from "@mui/material";

export const SendMessageArea: FC = () => {
  const { user } = UserAuth();

  const [message, setMessage] = useState<string>("");

  const sendMessage = async () => {
    if (message === "") return;
    try {
      await addDoc(collection(db, "messages"), {
        userId: user.uid,
        userName: user.displayName,
        image: user.photoURL,
        message: message,
        sendedAT: Timestamp.now(),
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
        <Button
          variant="contained"
          className={style.sendMessageButton}
          onClick={sendMessage}
        >
          Send message
        </Button>
      </div>
    </div>
  );
};
