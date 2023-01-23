const initialsate = false;

const types = {
  cambio: "INVERTIRESTADO",
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case types.cambio:
      return !state;
    default:
      return state;
  }
};

export { initialsate, types };
export default stateReducer;
