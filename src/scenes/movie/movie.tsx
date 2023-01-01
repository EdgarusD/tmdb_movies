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
  }, [id]);

  // React.useEffect(() => {
  //   async function getCategories() {
  //     const { data } = await api.get(
  //       "/3/movie/popular?api_key=32dd6f3014c24b7ad202c6421bfa1452"
  //     );
  //     setMovies(data.results);
  //   }

  //   getCategories();

  //   console.log(movies);
  // }, []);

  // React.useEffect(() => {
  //   async function compararID() {
  //     const peli = await movies.find((element) => element.id === movieIF);
  //     setMovieSelect(peli);
  //   }
  //   compararID();
  //   console.log("ADw");
  //   console.log(movieSelect);
  // }, [movieIF, movieSelect, movies]);

  return <div>{movieSelect.id}</div>;
}
