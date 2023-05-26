import React from "react";
import * as M from "@mantine/core";
import ListOfMovies from "./ListOfMovies";
import { useAtom } from "jotai";
import { manageStateControlAtom, manageUserAtom } from "../../components/state-global/UserAtom";


export default function Favoritos() {


  const [stateControl, ] = useAtom(manageStateControlAtom);
  const [movies, setMovies] = React.useState<any[]>();
  const [userSesion] = useAtom(manageUserAtom);

  const url = 'getfavoritos.php';

  React.useEffect(() => {

    let objet = {
      idUsuario: 0
    };

    if (userSesion) {
    
      objet = {
        idUsuario: userSesion.uid
      };
    } 

    fetch(`http://localhost/peliculas/${url}`, {
      method: "POST",
      body: JSON.stringify(objet),
    }).then((response) => response.json())
    .then((data) => {
      setMovies(data);
    })
    .catch((error) => {
      console.log("error");
    });

    // fetch(`http://localhost/peliculas/getfavoritos.php`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMovies(data);
    //   })
    //   .catch((error) => {
    //     console.log("error");
    //   });

  }, [stateControl, userSesion]);

  return ( movies==null ? <div>UserActiveFav</div> : <ListOfMovies movies = {movies} />);
}
