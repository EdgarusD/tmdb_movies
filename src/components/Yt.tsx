import React from "react";
import * as M from "@mantine/core";
import { stateContext } from "./state-global/StateProvider";
import { types } from "./state-global/StateReducer";
import { FaTimes } from "react-icons/fa";
import YouTube, { YouTubeProps } from "react-youtube";

export default function Yt({movieTrailer}: any) {
  const [show, dispach] = React.useContext(stateContext);

  const ref = React.useRef(null);

  const fontStyles = { fontSize: "20px" };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  console.log(movieTrailer.key);
  return (
    <M.Box
    sx={{
      width: "48%",
      height: "65%",
      position: "absolute",
      zIndex: 6,
      display: 'flex',
      top: "20%",
      left: "26%",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
      <M.Box
        onClick={() => dispach({ type: types.cambio })}
        sx={{ position: "absolute", top: "0", right: "0" }}
      >
        <FaTimes style={fontStyles} />
      </M.Box>
      <YouTube
        id="yotube-video"
        ref={ref}
        videoId={movieTrailer.key}
        opts={opts}
      />
    </M.Box>
  );
}
