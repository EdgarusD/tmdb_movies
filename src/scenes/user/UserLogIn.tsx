import React from "react";
import * as M from "@mantine/core";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAtom } from "jotai";
import {
  manageUserAtom,
  manageUserStateAtom,
} from "../../components/state-global/UserAtom";
import { useStyles } from "./EstilosUserLoggin";

export default function UserLogIn() {
  const { classes } = useStyles();

  const [correo, setCorreo] = React.useState(" ");
  const [upDateName, setUpdateName] = React.useState("");
  const [contraseña, setContraseña] = React.useState(" ");

  const [, setUserSesion] = useAtom(manageUserAtom);
  const [, setUserState] = useAtom(manageUserStateAtom);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("ADAW");
    createUserWithEmailAndPassword(auth, correo, contraseña).then(
      (userCredential) => {
        console.log(userCredential);
        updateProfile(auth.currentUser!, { displayName: upDateName })
          .then(() => {
            console.log("nombre actualizao");
            // setcurrentSesion(auth.currentUser); //aquiiiii
            setUserSesion(auth.currentUser);
            setUserState(1);
          })
          .catch(Error);
      }
    );
  };

  return (
    <M.Box className={classes.form_loggin}>
      <form onSubmit={handleSubmit}>
        <M.TextInput
          label="Correo"
          classNames={{root: classes.root, input: classes.input, label: classes.label}}
          placeholder="Correo"
          onChange={(event) => setCorreo(event.target.value)}
        />
        <M.TextInput
          label="Contraseña"
          classNames={{root: classes.root, input: classes.input, label: classes.label}}
          placeholder="contraseña"
          onChange={(event) => setContraseña(event.target.value)}
        />
        <M.TextInput
          label="Nombre de usario"
          classNames={{root: classes.root, input: classes.input, label: classes.label}}
          placeholder="Nombre"
          onChange={(event) => setUpdateName(event.target.value)}
        />
        <M.Button type="submit">loggin</M.Button>
      </form>
    </M.Box>
  );
}
