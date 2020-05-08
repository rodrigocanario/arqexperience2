const ambientesReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return state + action.payload;
    case "changeState":
      if (action.payload && action.type) {
        state[action.index].active = action.payload;
      }
      return state;
    case "MUDAR":
      state[action.ambiente].produtoSelecionados[action.produto].quantidade =
        action.valor;
      return state;
    case "DIMINUIR":
      console.log("rodou uma");
      console.log(state[action.ambiente]);
      if (
        state[action.ambiente].produtoSelecionados[action.produto].quantidade >
        0
      ) {
        state[action.ambiente].produtoSelecionados[action.produto].quantidade--;
      }
      return state;
    case "AUMENTAR":
      state[action.ambiente].produtoSelecionados[action.produto].quantidade++;
      return state;
    default:
      return state;
  }
};
export default ambientesReducer;
