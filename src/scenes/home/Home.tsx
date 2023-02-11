import React from "react";
import * as M from "@mantine/core";
import Carousel from "./Carousel";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import {manageUserAtom,} from "../../components/state-global/UserAtom";
import { useAtom } from "jotai"
import Test from "../../components/Test";


export default function Home() {
  const [movies, setMovies] = React.useState<any[]>([]);

  const [userSesion, ] = useAtom(manageUserAtom);
  const navigate = useNavigate();


  React.useEffect(() => {
    async function getCategories() {
      const { data } = await api.get(
        "/3/movie/popular?api_key=32dd6f3014c24b7ad202c6421bfa1452"
      );
      setMovies(data.results);
    }

    console.log(userSesion);

    getCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const path_base_img = "https://image.tmdb.org/t/p/w500/";

  function selecccionPelicula(movie: any) {
    navigate(`/movie/${movie.id}`);
  }
  
  const pelis = movies.map((movie) => (
    <M.Box
      sx={{ padding: "10px 20px", height: "360px", background: "#273746" }}
      onClick={() => selecccionPelicula(movie)}
    >
      <M.Box>
        {" "}
        <M.Image
          radius={10}
          src={path_base_img + movie.poster_path}
          alt=""
        />{" "}
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
  ));

  return (
    <M.Box>
      <Carousel movies={movies} />

      {userSesion ? <div>{userSesion.email}</div>: <div>no hay usuario</div>}

      <Test />

      <M.SimpleGrid cols={5} spacing="md">
        {pelis}
      </M.SimpleGrid>
    </M.Box>
  );
}