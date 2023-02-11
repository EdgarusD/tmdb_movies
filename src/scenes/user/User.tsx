import React from "react";
import * as M from "@mantine/core";
import {
  manageUserAtom,
  manageUserStateAtom,
} from "../../components/state-global/UserAtom";
import { useAtom } from "jotai";
import UserActive from "./UserActive";
import UserLogIn from "./UserLogIn";

export default function User() {
  const [userState, setUserState] = useAtom(manageUserStateAtom);

  const [userSesion] = useAtom(manageUserAtom);

  // React.useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user);
  //       SetUserSesion(user);
  //       setUserState(2);
  //     } else {
  //       console.log("no hay una secion iniciada");
  //     }
  //   });
  //   console.log(userState);
  // }, [SetUserSesion, userState]);

  React.useEffect(() => {
    if (userSesion) {
      console.log(userSesion);
      setUserState(1);
    } else {
      console.log(userSesion);
      setUserState(2);
    }

  }, [setUserState, userSesion]);

  // const handleSubmitName = (e: any) => {
  //   e.preventDefault();
  // };

  console.log(userState);

  if (userState === 1) {
    return <UserActive />;
  }

  return userState === 0 ? (
    <M.Box>Cargando</M.Box>
  ) : (
    <M.Box sx={{
      display:"flex",
      height:"400px",
      justifyContent:"center",
      alignItems:"center",
    }} >
      <UserLogIn />
    </M.Box>
  );
}
