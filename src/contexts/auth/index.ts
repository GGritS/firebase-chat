import { ReactNode } from "react";

export type AuthContextProviderTypes = {
  googleSignIn: () => void;
  user: any;
  logOut: () => void;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};
