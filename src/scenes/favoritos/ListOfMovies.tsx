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

  function selecccionSerie(movie: any) {
    navigate(`/tv/${movie.id}`);
  }

  function eliminarPelicula(movie: any, serie: boolean) {
    console.log(movie.nombre);
    const obj = {
      idUsuario: auth.currentUser!.uid,
      idMovie: movie.id,
      nameMovie: movie.nombre,
    };
    serie === false ? subidaJson(obj, "deleteMovie.php") :
    subidaJson(obj, "deleteSerie.php");
    window.setTimeout(setStateControl, 40);
  }

  const pelis = movies[1].map((movie: any) => (
    <M.Flex key={movie.id}>
      <M.List.Item sx={{ width: "90%" }}>
        <M.Flex>
          <M.Text
            className="List-text"
            onClick={() => {
              selecccionPelicula(movie);
            }}
          >
            {movie.nombre}
          </M.Text>
          <M.Flex className="List-icon">
            <FaTimes
              onClick={() => {
                eliminarPelicula(movie, false);
              }}
              className="Close"
            />
          </M.Flex>
        </M.Flex>
      </M.List.Item>
    </M.Flex>
  ));

  const series = movies[0].map((movie: any) => (
    <M.Flex key={movie.id}>
      <M.List.Item sx={{ width: "90%" }}>
        <M.Flex>
          <M.Text
            className="List-text"
            onClick={() => {
              selecccionSerie(movie);
            }}
          >
            {movie.nombre}
          </M.Text>
          <M.Flex className="List-icon">
            <FaTimes
              onClick={() => {
                eliminarPelicula(movie, true);
              }}
              className="Close"
            />
          </M.Flex>
        </M.Flex>
      </M.List.Item>
    </M.Flex>
  ));

  return (
    <M.Flex sx={{ width: "80%" }} justify={"space-between"}>
      <M.Box className="list-content-box">
        <M.Text className="List-name">Peliculas</M.Text>
        <M.List
          classNames={{
            root: "List",
            item: "List-item",
            itemWrapper: "List-item-wrapper",
          }}
        >
          {pelis}
        </M.List>
      </M.Box>
      <M.Box className="list-content-box">
        <M.Text className="List-name">Series</M.Text>
        <M.List
          classNames={{
            root: "List",
            item: "List-item",
            itemWrapper: "List-item-wrapper",
          }}
        >
          {series}
        </M.List>
      </M.Box>
    </M.Flex>
  );
}
