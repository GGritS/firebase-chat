import React from "react";
import { NavBar } from "./components/module/navBar/NavBar";
import { Root } from "./components/root";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Root />
    </div>
  );
}

export default App;
