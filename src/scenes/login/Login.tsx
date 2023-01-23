import React from "react";
import * as M from "@mantine/core";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Login() {
  const [correo, setCorreo] = React.useState(" ");
  const [upDateName, setUpdateName] = React.useState("");
  const [contraseña, setContraseña] = React.useState(" ");

  const [userState, setUserState] = React.useState<any>(0);
  const [user, setUser] = React.useState<any>([])

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        setUserState(2);
      } else {
        console.log("no hay una secion iniciada");
      }
    });
    console.log(userState);
  }, [userState]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("ADAW");
    createUserWithEmailAndPassword(auth, correo, contraseña).then(
      (userCredential) => {
        console.log(userCredential);
        setUserState(1);
      }
    );
  };

  const handleSubmitName = (e: any) => {
    e.preventDefault();
    updateProfile(auth.currentUser!, { displayName: upDateName })
      .then(() => {
        console.log("nombre actualizao");
        setUserState(2);
      })
      .catch(Error);
  };

  function logout() {
    signOut(auth)
      .then(() => {
        console.log("bien");
        setUserState(0);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  if (userState === 1) {
    return (
      <M.Box>
        <form onSubmit={handleSubmitName}>
          <M.TextInput
            placeholder="Correo"
            onChange={(event) => setUpdateName(event.target.value)}
          />
          <M.Button type="submit">loggin</M.Button>
        </form>
      </M.Box>
    );
  }

  return userState === 0 ? (
    <M.Box>
      <form onSubmit={handleSubmit}>
        <M.TextInput
          placeholder="Correo"
          onChange={(event) => setCorreo(event.target.value)}
        />
        <M.TextInput
          placeholder="contraseña"
          onChange={(event) => setContraseña(event.target.value)}
        />
        <M.Button type="submit">loggin</M.Button>
      </form>
    </M.Box>
  ) : (
    <M.Box>
      <M.Text>{user.email}</M.Text>
      <M.Button
        onClick={() => {
          logout();
        }}
      >
        Cerrar secion
      </M.Button>
    </M.Box>
  );
}
