import React from "react";
import * as M from "@mantine/core";
import { Link } from "react-router-dom";
import { FaUserCircle} from "react-icons/fa";
import "../styles/button.css";
import Search from "./Search";
import { manageSearchStateAtom } from "./state-global/UserAtom";
import { useAtom } from "jotai";

const styles = () => {
  return {
    textDecoration: "none",
    marginLeft: "24px",
    color: "#fff",
    fontSize: "24px",
  };
};
const stylesUserCircle = () => {
  return {};
};

export default function Header() {
  const [dataMovies, setDataMovies] = React.useState<any[]>([]);
  const [stateSeatch, setStateSearch] = useAtom(manageSearchStateAtom);
  const [searchText, setSearchText] = React.useState<string>("");

  console.log(searchText);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTAyNzc2ZWRiZjdjNWUyNDBlOTQ0NmMwNTk1MzUxMCIsInN1YiI6IjY0NmQ2OTcyZDE4NTcyMDE0MDMzMTQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SiGTrOIcbSylMyiqWaTqWrNX0WSBRuPfQdiZeqUGt1s",
    },
  };

  const search = (e: any) => {
    setSearchText(e.currentTarget.value);
    setStateSearch(true);

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDataMovies(response.results))
      .catch((err) => console.error(err));

    console.log(dataMovies);
  };

  return (
    <M.Box>
      <M.Grid
        justify="space-between"
        sx={{ margin: "15px 0px", position: "sticky" }}
      >
        <M.Grid align="center" sx={{ margin: "0px" }}>
          <Link style={styles()} to="/" onClick={()=>{setStateSearch(false)}}>
            <M.Title order={1}>Peliculas</M.Title>
          </Link>
          <M.List
            listStyleType="none"
            sx={{ marginLeft: "48px", display: "flex" }}
          >
            <M.List.Item> 
              <Link style={styles()} to="/tvseries" onClick={()=>{setStateSearch(false)}}>
                Tv series
              </Link>
            </M.List.Item>
            <M.List.Item>
              <Link style={styles()} to="/favoritos" onClick={()=>{setStateSearch(false)}}>
                Favoritos
              </Link>
            </M.List.Item>
          </M.List>
        </M.Grid>
        <M.Box sx={{ display: "flex" }}>
          <form action="">
            <M.TextInput
              placeholder="search"
              variant="unstyled"
              sx={{
                backgroundColor: "#262626",
                padding: "2px 6px",
                width: "200px",
                borderRadius: "2px",
                color: "#b5b5b5",
              }}
              classNames={{ input: "input-mantine" }}
              onChange={(e) => search(e)}
            />
          </form>
          <Link style={styles()} to="/user" onClick={()=>{setStateSearch(false)}}>
            <FaUserCircle style={stylesUserCircle()} />
          </Link>
        </M.Box>
      </M.Grid>
      <M.Flex
        className={`${stateSeatch ? "search-results" : "search-waiting"}`}
      >
        {dataMovies ? <Search data={dataMovies} /> : <div>cargando</div>}
      </M.Flex>
    </M.Box>
  );
}
