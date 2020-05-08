import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import ambientesReducer from "../../../Redux/reducers/ambientes";
import { prev, next, add } from "../../../Redux/actions";
import $ from "jquery";
import Inputs from "./inputs";

const Pag4 = () => {
  var dispatch = useDispatch();
  const ambientes = useSelector((state) => state.ambientes);
  var abas = [];
  const tabis = () => {
    for (var i = 0; i < ambientes.length; i++) {
      var imges = [];
      for (var j = 0; j < ambientes[i].produtoSelecionados.length; j++) {
        imges.push(<Inputs key={j} ambiente={i} produto={j} />);
      }
      abas.push(
        <Row
          key={i}
          className="justify-content-md-center"
          style={{
            border: `black solid 1px`,
            borderRadius: `10px`,
            padding: `10px`,
            margin: `20px`,
            backgroundColor: `white`,
          }}
        >
          <Col>
            <Row className="justify-content-md-center">
              <h2 style={{ fontFamily: `gBold`, color: `#e75d86` }}>
                {ambientes[i].nome.toUpperCase()}
              </h2>
            </Row>
            <Row
              style={{ padding: `20px` }}
              className="row justify-content-center"
            >
              {imges}
            </Row>
          </Col>
        </Row>
      );
    }
  };
  tabis();
  return (
    <div className="container" style={{ paddingTop: `100px` }}>
      <Row>
        <h1
          className="loll display-4"
          style={{
            fontFamily: `gBold`,
            fontSize: `2rem`,
            color: `#cb3638`,
          }}
        >
          CONFIRME SUAS ESCOLHAS E SELECIONE AS QUANTIDADES
        </h1>
      </Row>
      {abas}
      <Row className="justify-content-md-center">
        <Button
          size="sm"
          style={{
            backgroundColor: `transparent`,
            borderColor: `transparent`,
            color: `black`,
            textDecoration: "underline",
          }}
          onClick={() => {
            dispatch(prev());
          }}
        >
          ALTERAR ESCOLHAS
        </Button>
      </Row>
      <Row
        className="justify-content-md-center"
        style={{ paddingBottom: `20px` }}
      >
        <Button
          size="lg"
          style={{
            backgroundColor: `#e75d86`,
            borderColor: `#e75d86`,
            width: `180px`,
          }}
          onClick={() => {
            dispatch(next());
          }}
        >
          FINALIZAR
        </Button>
      </Row>
    </div>
  );
};
export default Pag4;
