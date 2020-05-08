import React from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { next, add } from "../../../Redux/actions/index";
const Pag2 = () => {
  const prox = useDispatch();
  const ambs = useSelector((state) => state.ambientes);
  const proximaEtapa = () => {
    const selects = $("select");
    const length = $("select").length;
    let j = 1;
    let k = 1;
    let l = 1;
    for (let i = 0; i < length; i++) {
      var value = selects[i].value;
      switch (value) {
        case "quarto":
          ambs.push({
            nome: value + " " + j,
            tipo: "Quarto",
            id: j,
            active: "Camas",
            produtoSelecionados: [],
          });
          j++;
          break;
        case "cozinha":
          ambs.push({
            nome: value + " " + k,
            tipo: "Cozinha",
            id: k,
            active: "Camas",
            produtoSelecionados: [],
          });
          k++;
          break;
        case "sala":
          ambs.push({
            nome: value + " " + l,
            tipo: "Sala",
            id: l,
            active: "Camas",
            produtoSelecionados: [],
          });
          l++;
          break;
      }
    }
    var Ambs = JSON.stringify(ambs);
    localStorage.setItem("ambientes", Ambs);
    prox(next());
    // $(".row2").fadeTo(400, 0, () => {
    //   window.location.href = "./pag3";
    // });
  };
  const addAmbiente = () => {
    $("#ambii").append(
      `<select style="width: 100%; background-color: rgb(230, 230, 230); border: none; border-radius: 4px; font-size: 1.5rem;  margin:10px;"><option value="padrao">Selecione um ambiente</option><option value="quarto">Quarto</option><option value="cozinha">Cozinha</option><option value="sala">Sala</option></select> `
    );
  };
  $(".container").ready(() => {
    $(".container").fadeTo(2000, 1);
  });
  return (
    <div className="container row2" style={{ opacity: 0 }}>
      <div
        className="row  align-items-center justify-content-center "
        style={{ height: 100 + "vh" }}
        // onClick={this.proximaEtapa}
      >
        <div className="col-9 text-left">
          <div className="titulo titulo1">
            <h1
              className="loll display-4"
              style={{
                fontFamily: `gBold`,
                fontSize: `2rem`,
                color: `#cb3638`,
              }}
            >
              Primeiro,
            </h1>
            <br />
            <br />
            <h1 className="loll display-4" style={{ fontSize: `2rem` }}>
              NOS CONTE SOBRE O AMBIENTE E QUANTOS SÃO
            </h1>
            <br />
            <div className="row align-items-center">
              <div className="col-4">
                <img className="img-fluid" src="/media/ambiente.png" />
              </div>
              <div className="col-5 listAmbientes">
                <div id="ambii">
                  <select
                    style={{
                      width: `100%`,
                      backgroundColor: `#e6e6e6`,
                      border: `none`,
                      borderRadius: `4px`,
                      fontSize: `1.5rem`,
                      fontStyle: `italic`,
                      margin: `10px`,
                    }}
                  >
                    <option value="padrao">Selecione um ambiente</option>
                    <option value="quarto">Quarto</option>
                    <option value="cozinha">Cozinha</option>
                    <option value="sala">Sala</option>
                  </select>
                </div>
                <p
                  onClick={addAmbiente}
                  className="text-right"
                  style={{
                    color: `#f28ea4`,
                    fontFamily: `gLight`,
                    cursor: `pointer`,
                  }}
                >
                  Adicionar outro ambiente.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row align-items-center justify-content-center">
              <button
                onClick={proximaEtapa}
                className="btn btn-lg"
                style={{
                  backgroundColor: `#e75d86`,
                  color: `white`,
                  fontFamily: `gBold`,
                  letterSpacing: `5px`,
                }}
              >
                PRÓXIMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pag2;
