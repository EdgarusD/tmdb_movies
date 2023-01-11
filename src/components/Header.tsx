import React from "react";
import * as M from "@mantine/core";
import { Link } from "react-router-dom";

const styles = () => {
  return {
    textDecoration: "none",
    marginLeft: "24px",
    color: "#fff",
    fontSize: "24px",
  };
};

export default function Header() {
  return (
    <M.Grid justify="space-between" sx={{ margin: "15px 0px", position: "sticky" }}>
      <M.Grid align="center" sx={{ margin: "0px" }}>
        <Link style={styles()} to="/">
          <M.Title order={1} >
            peliculas
          </M.Title>
        </Link>
        <M.List
          listStyleType="none"
          sx={{ marginLeft: "48px", display: "flex" }}
        >
          <M.ListItem>
            <Link style={styles()} to="/movies">
              movies
            </Link>
          </M.ListItem>
          <M.ListItem>
            <Link style={styles()} to="/series">
              tv series
            </Link>
          </M.ListItem>
        </M.List>
      </M.Grid>
      <M.Box>
        <M.Input  placeholder="search" variant='unstyled' sx={{backgroundColor:'#262626', padding:'2px 6px', width:'200px', borderRadius:'2px', color:'white'}}/>
      </M.Box>
    </M.Grid>
  );
}
