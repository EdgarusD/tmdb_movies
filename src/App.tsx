import React from "react";
import * as M from "@mantine/core";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import { manageUserAtom } from "./components/state-global/UserAtom";
import { useAtom } from "jotai";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { NotificationsProvider } from "@mantine/notifications";

function App() {
  const [, setUserSesion] = useAtom(manageUserAtom);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserSesion(user);
      console.log(user);
    } else {
      console.log("no hay una secion iniciada");
    }
  });

  return (
    <M.MantineProvider>
      <NotificationsProvider>
        <M.Box sx={{ width: "94%", margin: "auto" }} className="App">
          <Header />
          <Outlet />
        </M.Box>
      </NotificationsProvider>
    </M.MantineProvider>
  );
}

export default App;
