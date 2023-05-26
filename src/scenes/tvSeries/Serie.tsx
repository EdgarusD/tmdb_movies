import React from 'react'
import * as M from "@mantine/core";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import Fondo from "../../components/Fondo";
import SkeletonFondo from "../../components/skeletons/SkeletonFondo";
import StateProvider from "../../components/state-global/StateProvider";
export default function Serie() {
  const [dataMovie, setDataMovie] = React.useState<any>([]);
  const [dataMovieTrailer, setDataMovieTrailer] = React.useState<any>([]);

  const { id } = useParams();
  
  React.useEffect(() => {
    async function getMovie() {
      const { data } = await api.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=32dd6f3014c24b7ad202c6421bfa1452&language=en-US`
      );
      setDataMovie(data);
    }
    async function getMovieVideos() {
      const { data } = await api.get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=32dd6f3014c24b7ad202c6421bfa1452&language=en-US`
      );
      const posicionTrailer: number = data.results.length;
      const trailer = data.results[posicionTrailer - 1];
      setDataMovieTrailer(trailer);
    }
    getMovieVideos();
    getMovie();
    console.log("useEderv");
  }, [id]);

  let loading = dataMovie.genres;
  console.log(loading);

  return (
    <M.Box>
      {loading !== undefined ? (
        <StateProvider>
          <Fondo dataMovie={dataMovie} dataMovieTrailer={dataMovieTrailer} src={'tv'} />
        </StateProvider>
      ) : (
        <SkeletonFondo />
      )}
    </M.Box>
  );
}
