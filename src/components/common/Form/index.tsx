import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../../contexts/auth/AuthContext";

import style from "./index.module.scss";

export const Form: FC = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/chat");
    }
  }, [user]);

  return (
    <div className={style.wrapper}>
      <button onClick={handleGoogleSignIn}> login with google</button>
    </div>
  );
};
