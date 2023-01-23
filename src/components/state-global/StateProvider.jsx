import React from "react";
import stateReducer, { initialsate } from "./StateReducer";

const stateContext = React.createContext();

const StateProvider = ({ children }) => {

  const [show, dispach] = React.useReducer(stateReducer, initialsate); 

  return <stateContext.Provider value={[show, dispach]}>{children}</stateContext.Provider>;
};

export {stateContext}

export default StateProvider;
