import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  form_loggin: {
    width: "26%",
  },
  rootInput: {
    marginBottom: "28px",
    textAlign: "left",
  },
  input: {
    backgroundColor: "#273746",
    border: "none",
    color: "#fff",
    borderBottom: "1px solid",
    borderRadius: "1px",
    "&:focus": {
      borderBottom: "1px solid",
      borderLeft: "1px solid",
    },
  },
  labelInput: {
    color: "#fff",
  },
  rootButoon: {
    backgroundColor: "#3d3d3d",
    marginBottom: "50px",
    "&:hover": {
      backgroundColor: "#7e7e7e",
    },
  },
  rootButoonYt: {
    backgroundColor: "#ff7d7d",
    width: "100px",
    marginTop: "35px",
    "&:hover": {
      backgroundColor: "#ff3d3d",
    },
  },
  rootImage: {
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

export { useStyles };
