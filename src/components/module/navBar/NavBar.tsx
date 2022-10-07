import React, { FC } from "react";

import Box from "@mui/material/Box";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import { UserAuth } from "../../../contexts/auth/AuthContext";

export const NavBar: FC = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat
          </Typography>
          {user?.displayName ? (
            <button onClick={handleSignOut}>logout</button>
          ) : (
            <Box>you are not authorized</Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
