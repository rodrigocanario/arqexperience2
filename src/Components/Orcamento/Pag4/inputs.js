import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import { Mudar, Aumentar, Diminuir } from "../../../Redux/actions/index";

const Inputs = (props) => {
  const dispatch = useDispatch();
  const i = props.ambiente;
  const j = props.produto;
  const ambientes = useSelector((state) => state.ambientes);
  const quant = useSelector(
    (state) => state.ambientes[i].produtoSelecionados[j].quantidade
  );
  console.log(i);

  return (
    <Col xs={3} style={{ margin: `20px` }} key={j}>
      <Image fluid src={ambientes[i].produtoSelecionados[j].image} />
      <Row
        className="align-content-center justify-content-between"
        style={{
          backgroundColor: "rgb(231, 93, 134)",
          borderRadius: `10px`,
        }}
      >
        <Col className="text-center" style={{ padding: `0px` }}>
          <Button
            style={{
              backgroundColor: `#e75d86`,
              borderColor: `#e75d86`,
              fontSize: `1.75rem`,
              fontFamily: `gBold`,
              padding: `0px`,
            }}
            onClick={() => {
              dispatch(Diminuir(i, j));
            }}
          >
            -
          </Button>
        </Col>
        <Col
          className="text-center align-self-center"
          style={{ backgroundColor: `white` }}
        >
          <input
            min={0}
            step={1}
            type="number"
            value={quant}
            style={{
              width: `100%`,
              border: "none",
              textAlign: "center",
              backgroundColor: "white",
              fontSize: `1.25rem`,
              fontFamily: `gLight`,
            }}
            onChange={(e) => {
              var valor = e.target.value;
              console.log(valor);
              dispatch(Mudar(i, j, valor));
            }}
          />
        </Col>
        <Col className="text-center" style={{ padding: `0px` }}>
          <Button
            style={{
              backgroundColor: `#e75d86`,
              borderColor: `#e75d86`,
              fontSize: `1.75rem`,
              fontFamily: `gBold`,
              padding: `0px`,
            }}
            onClick={() => {
              dispatch(Aumentar(i, j));
            }}
          >
            +
          </Button>
        </Col>
      </Row>
    </Col>
  );
};
export default Inputs;
