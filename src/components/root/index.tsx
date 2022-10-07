import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserAuth } from "../../contexts/auth/AuthContext";
import { privateRoutes, publicRoutes } from "./routes";

export const Root: FC = () => {
  const { user } = UserAuth();
  const redirection = {
    notAuthorized: "/login",
    authorized: "/chat",
  };

  return (
    <div>
      {user ? (
        <Routes>
          {privateRoutes.map(({ path, component }) => (
            <Route path={path} element={component} key={Math.random()} />
          ))}
          <Route
            path="*"
            element={<Navigate to={redirection.authorized} replace />}
          />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, component }) => (
            <Route path={path} element={component} key={Math.random()} />
          ))}
          <Route
            path="*"
            element={<Navigate to={redirection.notAuthorized} replace />}
          />
        </Routes>
      )}
    </div>
  );
};
