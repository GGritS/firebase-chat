import { CHAT_ROUTE, LOGIN_ROUTE } from "./paths";
import { Chat } from "../pages/chat/Chat";
import { Login } from "../pages/login/Login";

export const publicRoutes: MyRoutes[] = [
  {
    path: LOGIN_ROUTE,
    component: <Login />,
  },
];

export const privateRoutes: MyRoutes[] = [
  {
    path: CHAT_ROUTE,
    component: <Chat />,
  },
];

type MyRoutes = {
  path: string;
  component: React.ReactNode;
};
