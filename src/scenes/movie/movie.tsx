import React from "react";
import * as M from "@mantine/core";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export default function Movie() {
  const [movieSelect, setMovieSelect] = React.useState<any>([]);

  const { id } = useParams();

  React.useEffect(() => {
    async function getMovie() {
      const { data } = await api.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=32dd6f3014c24b7ad202c6421bfa1452&language=en-US`
      );
      setMovieSelect(data);
      console.log("loquesea");
      console.log(data);
    }
    getMovie();
    console.log(movieSelect.poster_path);
  }, [id]);

  return (
    <M.Box>
      <M.Box>
        <M.Image
          src={`https://image.tmdb.org/t/p/w500/${movieSelect.poster_path}`}
        />
      </M.Box>
    </M.Box>
  );
}
