import React from "react";
import * as M from "@mantine/core";
import Yt from "./Yt";
import { stateContext } from "./state-global/StateProvider";
import { types } from "./state-global/StateReducer";

export default function Fondo(dataMovies: any) {
  const [show, dispach] = React.useContext(stateContext);

  const movieSelect = dataMovies.dataMovie;
  const movieTrailer = dataMovies.dataMovieTrailer;
  const genre = movieSelect.genres;

  // function mostrar() {
  //   showYT ? setShowYT(false) : setShowYT(true);
  // }

  // function ocultar() {
  //   showYT ? setShowYT(false) : setShowYT(true);

  //   const el = document.getElementById("yotube-video");
  //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //   el?.onclose;
  // }

  const useStyles = M.createStyles((theme) => ({
    root: {
      position: "absolute",
      width: "100%",
    },
    imageWrapper: {
      overflow: "hidden",
      position: "relative",
      // bottom: "100px",
    },
    image: {
      bagroundColor: "rgba(0, 0, 0, 0.5)",
    },
  }));

  const { classes } = useStyles();

  // let generos = <M.Text>Loading...</M.Text>

  // if (genre !== undefined) {
  const generos = genre.map(( genre: any) => (
    <M.Text  >{genre.name}&nbsp;&nbsp;&nbsp;</M.Text>
  ));
  // }

  return (
    <M.Box
      sx={{
        width: "100%",
        height: "520px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <M.Image
        classNames={{
          root: classes.root,
          imageWrapper: classes.imageWrapper,
          image: classes.image,
        }}
        sx={{
          zIndex: 1,
        }}
        fit="cover"
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieSelect.backdrop_path}`}
      />
      <M.Box
        sx={{
          zIndex: 5,
          position: "absolute",
          bottom: "5%",
          width: "300px",
          left: "5%",
        }}
      >
        <M.Image
          src={`https://image.tmdb.org/t/p/w500/${movieSelect.poster_path}`}
        />
      </M.Box>
      <M.Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          zIndex: 3,
        }}
      ></M.Box>
      {/* <mostrarContext.Provider value={showYT}> */}

      {show ? <Yt movieTrailer={movieTrailer} /> : <M.Title sx={{display:"none"}}></M.Title>}

      {/* </mostrarContext.Provider> */}
      <M.Box
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 5,
          position: "absolute",
          left: "35%",
        }}
      >
        <M.Text align="left" sx={{ marginTop: "35px" }}>
          {movieSelect.original_title}
        </M.Text>
        <M.Grid>
          <M.Col span={2}>
            <M.Text align="left" sx={{ marginTop: "5px" }}>
              {movieSelect.release_date}
            </M.Text>
          </M.Col>
          <M.Col span={5}>
            <M.Grid sx={{ margin: "0" }}>{generos}</M.Grid>
          </M.Col>
        </M.Grid>
        <M.Text align="left" sx={{ marginTop: "35px" }}>
          {movieSelect.tagline}{" "}
        </M.Text>
        <M.Button
          variant="outline"
          onClick={() => dispach({ type: types.cambio })}
          sx={{ width: "100px", marginTop: "35px" }}
        >
          Ver trailer
        </M.Button>
        <M.Text align="left" sx={{ marginTop: "35px" }}>
          {movieSelect.overview}
        </M.Text>
      </M.Box>
    </M.Box>
  );
}
