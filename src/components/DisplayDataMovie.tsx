import React from "react";
import * as M from "@mantine/core";
import { FaHeart } from "react-icons/fa";
import { manageSearchStateAtom, manageUserAtom } from "./state-global/UserAtom";
import { useAtom } from "jotai";
import subidaJson from "../services/apiPelis";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import "../styles/search.css"

export default function DisplayDataMovie({ data, src, searchBool, tv }: any) {
  const [userSesion] = useAtom(manageUserAtom);
  const [, setStateSearch] = useAtom(manageSearchStateAtom);


  const navigate = useNavigate();

  const path_base_img = "https://image.tmdb.org/t/p/w500/";

  function añadirFavorito(idMovie: string, movieName: string, tv: boolean) {
    if (userSesion) {
      const obj = {
        idPelicula: idMovie,
        nombrePelicula: movieName,
        idUsuario: userSesion.uid,
      };
      tv ? subidaJson(obj, `addFavoritaTv.php`):
      subidaJson(obj, `addFavorita.php`);
    } else {
      showNotification({
        title: "Sin sesion",
        message: "Inicia sesion para continuar",
        styles: () => ({
          root: {
            "&::before": { backgroundColor: "#fffb00" },
          },
        }),
      });
    }
  }

  function selecccionPelicula(movie: any) {
    setStateSearch(false);
    navigate(`/${src}/${movie.id}`);
  }

  const pelis = data.map((movie: any) => (
    <M.Box sx={{ position: "relative" }} key={movie.id}>
      {
        tv?
        <M.Box
        sx={{
          position: "absolute",
          zIndex: 19,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          width: "25px",
          height: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "4px",
          left: "4px",
        }}
        
        onClick={() => añadirFavorito(movie.id, movie.original_name, tv)}
      >
        <FaHeart style={{ color: "red" }} />
      </M.Box>
      :
      <M.Box
      sx={{
        position: "absolute",
        zIndex: 19,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: "25px",
        height: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "4px",
        left: "4px",
      }}
      
      onClick={() => añadirFavorito(movie.id, movie.original_title, tv)}
    >
      <FaHeart style={{ color: "red" }} />
    </M.Box>
      }
      
      <M.Box
        className={`${ searchBool  ? "search-display" : "common-display"}`}
        onClick={() => selecccionPelicula(movie)}
      >
        <M.Box sx={{}}>
          <M.Image radius={10} src={path_base_img + movie.poster_path} alt="" />
        </M.Box>
        <M.Grid>
          <M.Text
            sx={{
              textAlign: "center",
              width: "100%",
              marginTop: "10px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {movie.original_title ? movie.original_title : movie.original_name}
          </M.Text>

          <M.Text>
            {movie.release_date ? movie.release_date : movie.first_air_date}
          </M.Text>
        </M.Grid>
      </M.Box>
    </M.Box>
  ));
  return (
    <M.SimpleGrid cols={5} spacing="md">
      {pelis}
    </M.SimpleGrid>
  );
}
