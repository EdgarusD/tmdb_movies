import React from "react";
import * as M from "@mantine/core";
import subidaJson from "../services/apiPelis";
// import { stateContext } from "./state-global/StateProvider";
// import { useAtom } from "jotai";
// import { userAtom, manageTestAtom } from "./state-global/UserAtom";

export default function Test() {
  const data = {
    idUsuario: 10,
  };

  console.log(data);

  const datajson = JSON.stringify(data);

  console.log(datajson)

  // const [show, dispach] = React.useContext(stateContext);
  // console.log(show + "dwaD")

  // const [value, setValue] = useAtom(manageTestAtom);

  // return <div>{value}</div>;

  // const subida = () => {
  //   console.log("fetch")
  //   fetch("http://localhost/peliculas/add.php", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response)
  //     .then((data) => {
  //       console.log("Enviada");
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // };

  const alerta = ()=>{
    console.log("daW")
  }

  

  return <M.Button onClick={()=>{alerta();}}>subir data</M.Button>;
}
