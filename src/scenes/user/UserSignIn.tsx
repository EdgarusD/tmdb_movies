import React from 'react'
import * as M from '@mantine/core';
import { auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { manageUserAtom, manageUserStateAtom } from '../../components/state-global/UserAtom';
import { useAtom } from 'jotai';
import { useStyles } from '../../styles/styles';


export default function UserSignIn() {

  const { classes } = useStyles();

  const [correo, setCorreo] = React.useState(" ");
  const [contraseña, setContraseña] = React.useState(" ");
  
  const [, setUserSesion] = useAtom(manageUserAtom);
  const [, setUserState] = useAtom(manageUserStateAtom);
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, correo, contraseña).then(
      (userCredential) => {
        console.log(userCredential, "daWWDAW");
        setUserSesion(auth.currentUser);
        setUserState(1);
      }
    ).catch((Error) => {
      console.log("error", Error);
    });
  };

  return (
    <M.Box className={classes.form_loggin}>
      <form onSubmit={handleSubmit}>
        <M.TextInput
          label="Correo"
          classNames={{root: classes.rootInput, input: classes.input, label: classes.labelInput}}
          placeholder="Correo"
          onChange={(event) => setCorreo(event.target.value)}
        />
        <M.TextInput
          label="Contraseña"
          classNames={{root: classes.rootInput, input: classes.input, label: classes.labelInput}}
          placeholder="contraseña"
          onChange={(event) => setContraseña(event.target.value)}
        />
        <M.Button classNames={{root: classes.rootButoon, }} type="submit">loggin</M.Button>
      </form>
      <M.Button classNames={{root: classes.rootButoon, }} onClick={()=>{setUserState(3)}} >Crear cuenta</M.Button>
    </M.Box>
  )
}
