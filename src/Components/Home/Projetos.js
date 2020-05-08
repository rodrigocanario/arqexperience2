import React from "react";
import Caroussel from "./Carousel";
import ItemProjetos from "./Item";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjetosArr from "./ProjetosArr";

const Projetos = () => {
  console.log(ProjetosArr);
  var abas = [];
  var count = 0;

  for (var i = 0; i < ProjetosArr.length; i++) {
    console.log(ProjetosArr[i]);
    abas.push(
      <div key={count}>
        <ItemProjetos
          ordem={count}
          titulo={ProjetosArr[i].titulo}
          descricao={ProjetosArr[i].descricaoSlide}
          src={ProjetosArr[i].src}
          etapa={ProjetosArr[i].etapa}
          href={ProjetosArr[i].href}
        />
        <hr style={{ borderTopColor: `white` }} />
      </div>
    );
    count++;
  }

  return (
    <div style={{ height: `100%`, backgroundColor: `black` }} id="projetow">
      <Row className="justify-content-center">
        <Caroussel />
        <Col xs={11} md={10} style={{ marginTop: `100px` }}>
          {abas}
        </Col>
      </Row>
    </div>
  );
};
export default Projetos;
