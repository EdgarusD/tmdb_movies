import React from "react";
import * as M from "@mantine/core";
import "../../styles/listStyles.css";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { manageStateControlAtom } from "../../components/state-global/UserAtom";
import { useAtom } from "jotai";
import { auth } from "../../firebase/firebase";
import subidaJson from "../../services/apiPelis";

export default function ListOfMovies({ movies }: any) {
  console.log(movies);

  const [, setStateControl] = useAtom(manageStateControlAtom);

  const navigate = useNavigate();

  function selecccionPelicula(movie: any) {
    navigate(`/movie/${movie.id}`);
  }

  function eliminarPelicula(movie:any) {
    console.log(movie.nombre);
    const obj= {
      idUsuario: auth.currentUser!.uid,
      idMovie: movie.id,
      nameMovie: movie.nombre,
    }
    subidaJson(obj, 'deleteMovie.php');
    window.setTimeout(setStateControl, 40);
  }

  const pelis = movies.map((movie: any) => (
    <M.Flex key={movie.id}>
      <M.List.Item
        sx={{ width: "90%" }}
        onClick={() => {
          selecccionPelicula(movie);
        }}
        
      >
        {movie.nombre}
      </M.List.Item>
      <M.Flex justify="center" align="center">
        <FaTimes  onClick={() => {
          eliminarPelicula(movie);
        }} className="Close" />
      </M.Flex>
    </M.Flex>
  ));

  return (
    <M.Flex sx={{ width: "50%" }} justify={"space-between"}>
      <M.List
        classNames={{
          root: "List",
          item: "List-item",
          itemWrapper: "List-item-wrapper",
        }}
      >
        {pelis}
      </M.List>
      <M.List classNames={{ root: "List", item: "List-item" }}>{pelis}</M.List>
    </M.Flex>
  );
}
