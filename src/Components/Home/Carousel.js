import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjetosArr from "./ProjetosArr";

const Caroussel = () => {
  const ItemCaroussel = [];
  for (var i = 0; i < ProjetosArr.length; i++) {
    console.log(ProjetosArr[i]);
    ItemCaroussel.push(
      <Carousel.Item>
        <img
          className="d-block w-100 img2"
          style={{ height: `600px` }}
          src={ProjetosArr[i].srcSlide}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel-titulo">{ProjetosArr[i].titulo}</h3>
          <p className="carousel-subtitulo">{ProjetosArr[i].descricaoSlide}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  return <Carousel id="projetos">{ItemCaroussel}</Carousel>;
};
export default Caroussel;
