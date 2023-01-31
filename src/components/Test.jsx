import React from "react";
import { stateContext } from "./state-global/StateProvider";
import { useAtom } from "jotai";
import { userAtom, testAtom, manageTestAtom } from "./state-global/UserAtom";


export default function Test() {
  // const [show, dispach] = React.useContext(stateContext);
  // console.log(show + "dwaD")

  const [value, setValue] = useAtom(testAtom)

  return <div>{value}</div>;
}
