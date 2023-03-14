import React from "react";
import * as M from "@mantine/core";
import ListOfMovies from "./ListOfMovies";
import { useAtom } from "jotai";
import { manageStateControlAtom } from "../../components/state-global/UserAtom";


export default function UserActiveFav() {


  const [stateControl, ] = useAtom(manageStateControlAtom);
  const [movies, setMovies] = React.useState<any[]>();

  React.useEffect(() => {
    fetch(`http://localhost/peliculas/getfavoritos.php`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log("error");
      });
      console.log(stateControl);

  }, [stateControl]);

  return ( movies==null ? <div>UserActiveFav</div> : <ListOfMovies movies = {movies} />);
}
