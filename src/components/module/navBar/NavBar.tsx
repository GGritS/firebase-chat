import React, { FC } from "react";

import Box from "@mui/material/Box";

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

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
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat
          </Typography>
          {user?.displayName ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={handleSignOut}
            >
              logout
            </Button>
          ) : (
            <Box>you are not authorized</Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
