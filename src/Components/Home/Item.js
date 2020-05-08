import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import $ from "jquery";

const ItemProjetos = (props) => {
  var classname = `divImgNo`;
  var classname2 = `divTxtNo`;
  if (props.ordem % 2 == 0) {
    classname = `divImgYes`;
    classname2 = `divTxtYes`;
  }
  switch (props.etapa) {
    case 1:
      var porcentagem = 25;
      var cor = "danger";
      var corLable = "#dc3545";
      var nome = "PLANEJAMENTO";
      var botao = [
        <Button style={{ marginTop: `20px` }} variant={cor}>
          Não Disponível
        </Button>,
      ];
      break;
    case 2:
      var porcentagem = 50;
      var cor = "warning";
      var corLable = "#ffc107";
      var nome = "PRODUÇÃO";
      var botao = [
        <Button
          style={{ marginTop: `20px`, color: `white` }}
          variant={cor}
          href={props.href}
        >
          TESTAR!
        </Button>,
      ];
      break;
    case 3:
      var porcentagem = 75;
      var cor = "info";
      var corLable = "#17a2b8";
      var nome = "AJUSTES FINAIS";
      var botao = [
        <Button style={{ marginTop: `20px` }} variant={cor} href={props.href}>
          TESTAR!
        </Button>,
      ];
      break;
    case 4:
      var porcentagem = 100;
      var cor = "success";
      var nome = "CONCLUÍDO";
      var corLable = "#28a745";
      var botao = [
        <Button style={{ marginTop: `20px` }} variant={cor} href={props.href}>
          TESTAR!
        </Button>,
      ];
      break;
  }
  $(document).ready(() => {
    $(".divImgYes").addClass("order-lg-2");
    $(".divTxtYes").addClass("order-lg-1");
  });
  console.log(props);
  return (
    <div className="container">
      <Row className=" justify-content-center">
        <Col xs={11} md={5} className={classname}>
          <Image fluid src={props.src} />
        </Col>
        <Col xs={11} md={7} style={{ color: `white` }} className={classname2}>
          <Row
            className=" justify-content-center align-items-center"
            style={{ height: `100%` }}
          >
            <Col>
              <Row className=" justify-content-center">
                <h3 style={{ textAlign: `center` }}>{props.titulo}</h3>
              </Row>
              <Row className=" justify-content-center">
                <p style={{ fontSize: `1.5rem`, textAlign: `center` }}>
                  {props.descricao}
                </p>
              </Row>
              <Row className=" justify-content-center">
                <ProgressBar
                  now={porcentagem}
                  animated
                  style={{ minWidth: `100%`, color: "blue" }}
                  variant={cor}
                  label={nome}
                />
              </Row>
              <Row
                className="justify-content-center align-content-center etapaLabel"
                style={{ marginTop: `10px`, color: corLable, display: "none" }}
              >
                <h6>Etapa: {nome}</h6>
              </Row>
              <Row className=" justify-content-center">{botao}</Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default ItemProjetos;
