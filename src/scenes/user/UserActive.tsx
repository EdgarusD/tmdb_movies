import React from 'react'
import * as M from "@mantine/core";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useAtom } from 'jotai';
import { manageUserStateAtom, manageUserAtom } from '../../components/state-global/UserAtom';

export default function UserActive(currentSesion: any) {

  const [userSesion, setUserSesion] = useAtom(manageUserAtom);
  const [, setUserState] = useAtom(manageUserStateAtom)

  function logout() {
    signOut(auth)
      .then(() => {
        console.log("bien");
        setUserState(2);
        // setcurrentSesion(null)
        setUserSesion(null);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <M.Box>
        <M.Text>{userSesion.email}</M.Text>
        <M.Text>{userSesion.displayName}</M.Text>
        <M.Button
          onClick={() => {
            logout();
          }}
        >
          Cerrar sesion
        </M.Button>
        
        <M.Flex justify={'center'}>
        </M.Flex>
      </M.Box>
  )
}
