import React from "react";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import $ from "jquery";
import Produtow from "./produtos";

const SwiperSlide = (props) => {
  const ambientes = useSelector((state) => state.ambientes);

  const produto = Produtow.find((element) => {
    return element.id === props.id;
  });
  produto.quantidade = 1;

  $(document).ready(() => {
    if (produto.toggle === 1) {
      $(`.div${produto.id}${props.ambiente}`).addClass("selected");
    }
  });
  const check = () => {
    $(document).ready(() => {
      console.log(produto.id);
      console.log(ambientes[props.ambiente].produtoSelecionados);
      const toggle = ambientes[props.ambiente].produtoSelecionados.find(
        (element) => {
          return element.id === produto.id;
        }
      );
      console.log(toggle);
      if (toggle) {
        console.log("FOII");
        $(`.div${produto.tipo}${props.ambiente}`).removeClass("selected");
        $(`.div${produto.id}${props.ambiente}`).addClass("selected");
      } else {
        $(`.div${produto.id}${props.ambiente}`).removeClass("selected");
      }
    });
  };
  check();
  const selecionarImagem = () => {
    if (!$(`.div${produto.id}${props.ambiente}`).hasClass("selected")) {
      var newProds = ambientes[props.ambiente].produtoSelecionados.filter(
        (element) => {
          return element.tipo !== produto.tipo;
        }
      );
      ambientes[props.ambiente].produtoSelecionados = newProds;
      ambientes[props.ambiente].produtoSelecionados.push(produto);
    } else {
      const newStr = ambientes[props.ambiente].produtoSelecionados.filter(
        (element) => {
          return element.id !== produto.id;
        }
      );
      ambientes[props.ambiente].produtoSelecionados = newStr;
    }
    check();
    // if (produto.toggle === 1) {
    //   $(`.div${produto.id}${props.ambiente}`).removeClass("selected");
    //   // $(`.div${produto.tipo}`).removeClass("selected");
    //   produto.toggle = 0;
    // } else {
    //   for (let i = 0; i < produtos.length; i++) {
    //     if (produtos[i].tipo === produto.tipo) {
    //       produtos[i].toggle = 0;
    //     }
    //   }
    //   produto.toggle = 1;
    //   $(`.div${produto.tipo}${props.ambiente}`).removeClass("selected");
    //   $(`.div${produto.id}${props.ambiente}`).addClass("selected");
    // }
  };
  const classname = `swiper-slide div${produto.id}${props.ambiente} div${produto.tipo}${props.ambiente}`;
  return (
    <div
      className={classname}
      onClick={() => {
        selecionarImagem();
      }}
      style={{ paddingTop: `15px` }}
    >
      <div className="col ">
        <div className="row">
          {/* <img
            className="img-fluid"
            src="/media/pendente1.jpg"
            style={{ margin: `0px` }}
            value="1"
          /> */}
          <Image src={produto.image} fluid />
        </div>
        <div className="row justify-content-center">
          <h6 style={{ color: `#e75d86` }}>R${produto.preco}</h6>
        </div>
      </div>
    </div>
  );
};
export default SwiperSlide;
