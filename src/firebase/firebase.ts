import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyADmPHLJDcnxOB0nNIG97PpNTbxd0ZADtU",
  authDomain: "react-chat-1bc7e.firebaseapp.com",
  projectId: "react-chat-1bc7e",
  storageBucket: "react-chat-1bc7e.appspot.com",
  messagingSenderId: "426923140182",
  appId: "1:426923140182:web:e1d9fe6fe64336bb0147f7",
  measurementId: "G-GTE3GJLMY3",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
