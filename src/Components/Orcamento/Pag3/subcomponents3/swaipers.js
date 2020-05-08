import React from "react";
import Produtos from "./produtos";
import $ from "jquery";
import Row from "react-bootstrap/Row";
import SwiperSlide from "./swiperSlide";
import { useSelector } from "react-redux";
import Swiper from "swiper";

const Swaipers = (props) => {
  console.log(props);
  var titulos = useSelector((state) => state.ambientes[props.ambiente]);
  var filter = Produtos.filter((element) => {
    if (element.tipo === props.type) {
      return element.id;
    }
  });
  console.log(filter);
  let abaas = [];
  for (let i = 0; i < filter.length; i++) {
    abaas.push(
      <SwiperSlide key={i} id={filter[i].id} ambiente={props.ambiente} />
    );
  }
  $(document).ready(function () {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  return (
    <Row
      style={{
        backgroundColor: `#d4d6d2`,
        borderRadius: `10px`,
        margin: `10px`,
      }}
    >
      <div className="swiper-container">
        <h6 className="text-left" style={{ color: `#e75d86` }}>
          {titulos.active}
        </h6>
        <div className="swiper-wrapper">{abaas}</div>
        {/* Add Pagination */}
        <div className="swiper-pagination" />
      </div>
    </Row>
  );
};
export default Swaipers;
