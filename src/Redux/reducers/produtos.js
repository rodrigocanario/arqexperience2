import Produtos from "../../Components/Orcamento/Pag3/subcomponents3/produtos";
const produtosReducer = (state = {}, action) => {
  state = Produtos;
  switch (action.type) {
    case "":
      return state + 1;
    default:
      return state;
  }
};
export default produtosReducer;
