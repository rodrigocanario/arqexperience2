export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};
export const next = () => {
  return {
    type: "next",
  };
};
export const prev = () => {
  return {
    type: "prev",
  };
};
export const add = (ambientesObj) => {
  return {
    type: "add",
    payload: ambientesObj,
  };
};
export const changeState = (newState, index) => {
  return {
    type: "changeState",
    payload: newState,
    index,
  };
};
export const Aumentar = (ambiente, produto) => {
  return {
    type: "AUMENTAR",
    ambiente,
    produto,
  };
};

export const Diminuir = (ambiente, produto) => {
  return {
    type: "DIMINUIR",
    ambiente,
    produto,
  };
};

export const Mudar = (ambiente, produto, valor) => {
  return {
    type: "MUDAR",
    ambiente,
    produto,
    valor,
  };
};
