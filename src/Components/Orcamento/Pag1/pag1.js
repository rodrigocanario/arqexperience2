import React, { Component } from "react";
// import $ from "jquery";
import { useDispatch } from "react-redux";
import { next } from "../../../Redux/actions/index";

const Pag1 = () => {
  const proximaEtapa = useDispatch();
  return (
    <div className="container row1">
      <div
        className="row  align-items-center justify-content-center "
        style={{ height: 100 + "vh" }}
      >
        <div className="col-9 text-center">
          <div className="titulo titulo1">
            <h1
              className="loll display-4 text-center"
              style={{ fontFamily: `gBold`, fontSize: `2rem` }}
            >
              BEM VINDO AO
            </h1>
            <br />
            <img
              className="img-fluid"
              src="/media/orceexpress.png"
              style={{ width: `60%` }}
            />
            <br />
            <br />
            <br />
            <h1
              className="loll display-4 text-center"
              style={{ fontSize: `2rem` }}
            >
              NOSSA NOVA FERRAMENTA QUE VAI AJUDAR VOCÊ A PLANEJAR O SEU
              ORÇAMENTO - PARA A SUA PRÓXIMA REFORMA.{" "}
            </h1>
            <br />
            <br />
            <button
              className="btn btn-lg"
              style={{
                backgroundColor: `#e75d86`,
                color: `white`,
                fontFamily: `gBold`,
                letterSpacing: `5px`,
              }}
              onClick={() => {
                proximaEtapa(next());
              }}
            >
              VAMOS LÁ!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pag1;
