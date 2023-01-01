import React from "react";
import * as M from "@mantine/core";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <M.Box sx={{width:'94%', margin:'auto'}} className="App">
      <Header />
      <Outlet />
    </M.Box>
  );
}

export default App;
