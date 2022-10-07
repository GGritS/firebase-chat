import React, { FC } from "react";
import { Form } from "../../common/Form";

import style from "./index.module.scss";

export const Login: FC = () => {
  return (
    <div className={style.wrapper}>
      <Form></Form>
    </div>
  );
};
