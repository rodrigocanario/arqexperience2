import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import etapaReducer from "./etapa";
import ambientesReducer from "./ambientes";
import { combineReducers } from "redux";
import produtosReducer from "./produtos";

const allReducers = combineReducers({
  counter: counterReducer,
  loggedin: loggedReducer,
  etapa: etapaReducer,
  ambientes: ambientesReducer,
  // produtos: produtosReducer,
});

export default allReducers;
