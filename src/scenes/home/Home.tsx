import React from "react"
import * as M from "@mantine/core";
import Carousel from "./Carousel";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { manageUserAtom } from "../../components/state-global/UserAtom";
import { useAtom } from "jotai";
import Test from "../../components/Test";
import { FaHeart } from "react-icons/fa";
import subidaJson from "../../services/apiPelis";
import { showNotification } from "@mantine/notifications";

export default function Home() {
  const [movies, setMovies] = React.useState<any[]>([]);

  const [userSesion] = useAtom(manageUserAtom);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getCategories() {
      const { data } = await api.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=32dd6f3014c24b7ad202c6421bfa1452"
      );
      setMovies(data.results);
    }

    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const path_base_img = "https://image.tmdb.org/t/p/w500/";

  function selecccionPelicula(movie: any) {
    navigate(`/movie/${movie.id}`);
  }

  function añadirFavorito(idMovie: string, movieName: string) {
    if (userSesion) {
      const obj = {
        idPelicula: idMovie,
        nombrePelicula: movieName,
        idUsuario: userSesion.uid
      };
      subidaJson(obj, "addFavorita.php");
    } else {
      showNotification({
        title: "Sin sesion",
        message:"Inicia sesion para continuar",
        styles: ()=>({
          root: {
            '&::before': { backgroundColor: '#fffb00' },
          }
        })
      })
    }
  }

  const pelis = movies.map((movie) => (
    <M.Box sx={{ position: "relative" }}>
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
        onClick={() => añadirFavorito(movie.id, movie.title)}
      >
        <FaHeart style={{ color: "red" }} />
      </M.Box>
      <M.Box
        sx={{
          padding: "10px 20px",
          height: "360px",
          background: "#273746",
          zIndex: 2,
        }}
        onClick={() => selecccionPelicula(movie)}
      >
        <M.Box sx={{}}>
          <M.Image radius={10} src={path_base_img + movie.poster_path} alt="" />{" "}
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
            {movie.title}
          </M.Text>

          <M.Text>{movie.release_date}</M.Text>
        </M.Grid>
      </M.Box>
    </M.Box>
  ));

  return (
    <M.Box>
      <Carousel movies={movies} />
      <M.SimpleGrid cols={5} spacing="md">
        {pelis}
      </M.SimpleGrid>
    </M.Box>
  );
}
