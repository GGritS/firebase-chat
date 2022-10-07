import {
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useContext, createContext, FC, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { AuthContextProviderTypes, AuthContextProviderProps } from "./";

const AuthContext = createContext<AuthContextProviderTypes>(
  {} as AuthContextProviderTypes
);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider); //аунтефикация на другой странице
    signInWithRedirect(auth, provider); //аунтефикация на этой странице
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const value: AuthContextProviderTypes = {
    googleSignIn,
    user,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
