import React from "react"
import * as M from "@mantine/core";
import Carousel from "./Carousel";
import api from "../../services/api";
import DisplayDataMovie from "../../components/DisplayDataMovie";



export default function Home() {
  const [movies, setMovies] = React.useState<any[]>([]);

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

  return (
    <M.Box>
      <Carousel movies={movies} />
     <M.Box>
     {movies ? <DisplayDataMovie data={movies} src={'movie'}/> : <div>cargando</div> }
     </M.Box>
    </M.Box>
  );
}
