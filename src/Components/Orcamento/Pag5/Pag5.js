import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

const Pag5 = () => {
  var tototal = 0;
  const ambientes = useSelector((state) => state.ambientes);
  var abas = [];
  const tabis = () => {
    for (var i = 0; i < ambientes.length; i++) {
      var total = 0;
      var nomis = [];
      var precus = [];
      var quanti = [];
      for (var j = 0; j < ambientes[i].produtoSelecionados.length; j++) {
        if (ambientes[i].produtoSelecionados[j].quantidade > 0) {
          total =
            total +
            ambientes[i].produtoSelecionados[j].preco *
              ambientes[i].produtoSelecionados[j].quantidade;
          tototal =
            tototal +
            ambientes[i].produtoSelecionados[j].preco *
              ambientes[i].produtoSelecionados[j].quantidade;

          nomis.push(
            <Row className="justify-content-center">
              <h4>ITEM {ambientes[i].produtoSelecionados[j].id}</h4>
            </Row>
          );
          quanti.push(
            <Row className="justify-content-center">
              <h4>X{ambientes[i].produtoSelecionados[j].quantidade}</h4>
            </Row>
          );
          precus.push(
            <Row className="justify-content-center">
              <h4>
                R$
                {ambientes[i].produtoSelecionados[j].preco *
                  ambientes[i].produtoSelecionados[j].quantidade}
              </h4>
            </Row>
          );
        }
      }
      total = total;
      abas.push(
        <Col xs={4}>
          <Row className="justify-content-center">
            <h2 style={{ fontFamily: `gBold`, color: `#e75d86` }}>
              {ambientes[i].nome.toUpperCase()}
            </h2>
          </Row>
          <br />

          <Row className="justify-content-center">
            <Col className="center-text">{nomis}</Col>
            <Col className="center-text">{quanti}</Col>
            <Col className="center-text">{precus}</Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="center-text">
              <h4 style={{ fontFamily: `gbold` }}>TOTAL</h4>
            </Col>
            <Col className="text-right">
              <h4 style={{ color: `#e75d86` }}>R${total}</h4>
            </Col>
          </Row>
        </Col>
      );
    }
  };
  tabis();
  return (
    <div className="container" style={{ paddingTop: `100px` }}>
      <Row className="justify-content-between">
        {abas}
        <Col xs={3}>
          <Row className="align-items-end">
            <h6>
              RESUMO:
              <br />
              <br />
              Os valores são estimados, o mais próximo da possível da realidade,
              mas pode existir alteração - o orçamento é macro, logo você vai
              escolher acabamentos/ materiais como um todo. <br />
              Para orçar um item, ele deve ser selecionado, caso contrário não
              será orçado
            </h6>
          </Row>
          <Row className="align-items-end">
            <h1 style={{ fontFamily: `gBold` }}>
              TOTAL <span style={{ color: `#e75d86` }}>R${tototal}</span>
            </h1>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Row className="justify-content-center">
            <Col xs={4} className="text-center">
              <Button
                size="sm"
                style={{
                  backgroundColor: `#e75d86`,
                  borderColor: `#e75d86`,
                }}
                onClick={() => {}}
              >
                COMPARTILHAR
              </Button>
            </Col>
            <Col xs={3} className="text-center">
              <Button
                size="sm"
                style={{
                  backgroundColor: `#e75d86`,
                  borderColor: `#e75d86`,
                }}
                onClick={() => {}}
              >
                IMPRIMIR
              </Button>
            </Col>
            <Col xs={5} className="text-center">
              <Button
                size="sm"
                style={{
                  backgroundColor: `#e75d86`,
                  borderColor: `#e75d86`,
                }}
                href="https://www.arqexpress.com.br/servicos"
              >
                FAZER UM PROJETO
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Pag5;
