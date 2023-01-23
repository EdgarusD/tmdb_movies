import React from "react";
import * as M from "@mantine/core";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonFondo() {
  return (
    <SkeletonTheme highlightColor="#b0b0b0">
      <M.Box
        sx={{
          width: "100%",
          height: "520px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <M.Box
          sx={{
            backgroundColor: "#0a344f",
            zIndex: 5,
            position: "absolute",
            bottom: "5%",
            width: "300px",
            left: "5%",
            top: "10%",
          }}
        >
          <Skeleton height={"900px"} />
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
            display: "flex",
            flexDirection: "column",
            zIndex: 5,
            position: "absolute",
            left: "35%",
            top: "10%",
            width: "60%",
          }}
        >
          <M.Box sx={{ marginBottom: "10px", width: "40%" }}>
            <Skeleton />
          </M.Box>
          <M.Grid sx={{ marginBottom: "10%" }}>
            <M.Col span={2}>
              <Skeleton />
            </M.Col>
            <M.Col span={5}>
              <Skeleton />
            </M.Col>
          </M.Grid>
          <M.Box sx={{ marginBottom: "15%", width: "50%" }}>
            <Skeleton colorMode={"light"} />
          </M.Box>

          <M.Box sx={{ marginBottom: "10px" }}>
            <Skeleton count={4} />
          </M.Box>
        </M.Box>
      </M.Box>
    </SkeletonTheme>
  );
}
