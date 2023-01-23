import React from "react";
import { stateContext } from "./state-global/StateProvider";

export default function Test() {
  const [show, dispach] = React.useContext(stateContext);
  console.log(show + "dwaD")
  return <div>Test</div>;
}
