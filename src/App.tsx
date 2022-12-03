import React from "react";
import { NavBar } from "./components/module/navBar/NavBar";
import { Root } from "./components/root";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Root />
    </div>
  );
}

export default App;
