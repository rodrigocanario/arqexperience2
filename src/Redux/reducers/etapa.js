const etapaReducer = (state = 1, action) => {
  switch (action.type) {
    case "next":
      return state + 1;
    case "prev":
      return state - 1;
    default:
      return state;
  }
};
export default etapaReducer;
