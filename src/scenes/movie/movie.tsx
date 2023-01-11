import React from "react";
import * as M from "@mantine/core";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function Movie() {
  const [movieSelect, setMovieSelect] = React.useState<any>([]);
  const [movieTrailer, setMovieTrailer] = React.useState<any>([]);
  const [genre, setGenre] = React.useState<any>([]);
  const [show, setShow] = React.useState<boolean>(true);

  const { id } = useParams();

  React.useEffect(() => {
    async function getMovie() {
      const { data } = await api.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=32dd6f3014c24b7ad202c6421bfa1452&language=en-US`
      );
      setMovieSelect(data);
      setGenre(data.genres);
    }
    async function getMovieVideos() {
      const { data } = await api.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=32dd6f3014c24b7ad202c6421bfa1452&language=en-US`
      );
      let posicionTrailer: number = data.results.length
      setMovieTrailer(data.results[posicionTrailer-1]);

      console.log(posicionTrailer);
      console.log(data.results[posicionTrailer-1].key);
    }
    getMovie();
    getMovieVideos();
  }, [id]);

  // const genres = movieSelect.genres.map((genre: any)=>{
  //   return <M.Text>{genre.id}</M.Text>
  // })

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

  const genres = genre.map((genre: any) => (
    <M.Text>{genre.name}&nbsp;&nbsp;&nbsp;</M.Text>
  ));

  const { classes } = useStyles();

  function mostrar() {
    show ? setShow(false) : setShow(true);
    console.log(show);
  }


  const trailer = <M.Box>{movieSelect.tagline}</M.Box>;

  const fontStyles = { fontSize: "20px" };

  return (
    <M.Box>
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
            backgroundColor: "#0a344f",
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
        <M.Box
          sx={{
            width: "48%",
            height: "65%",
            position: "absolute",
            zIndex: 6,
            display: `${show ? "none": "flex"}`,
            top: "20%",
            left: "26%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <M.Box onClick={()=>mostrar()} sx={{ position: "absolute", top: "0", right: "0" }}>
            <FaTimes style={fontStyles} />
          </M.Box>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movieTrailer.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </M.Box>
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
              <M.Grid sx={{ margin: "0" }}>{genres}</M.Grid>
            </M.Col>
          </M.Grid>
          <M.Text align="left" sx={{ marginTop: "35px" }}>
            {movieSelect.tagline}{" "}
          </M.Text>
          <M.Button variant="outline" onClick={()=>mostrar()} sx={{width:"100px", marginTop:"35px"}}>Ver trailer</M.Button>
          <M.Text align="left" sx={{ marginTop: "35px" }}>
            {movieSelect.overview}
          </M.Text>
          <M.Text align="left" sx={{ marginTop: "35px" }}>
            {trailer}
          </M.Text>
        </M.Box>
      </M.Box>
    </M.Box>
  );
}
