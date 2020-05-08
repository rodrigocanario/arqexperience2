import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SubTabs3 from "./subcomponents3/tabs";
import $ from "jquery";
import Swiper from "swiper";
import { Refresh, changeState, next } from "../../../Redux/actions/index";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import resize from "image-map-resizer";
// const $ = require("jquery");
// const Swiper = require("swiper");
require("./pag3.css");

const Pag3 = () => {
  const dispatch = useDispatch();
  dispatch(changeState("padrao", 0));
  // const carregar = () => {
  //   var swiper = new Swiper(".swiper-container", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //   });
  // };
  const ambientes = useSelector((state) => state.ambientes);

  const select = (id) => {
    $(`.pendente[value='${id.value}']`).css({ border: `black solid 1px` });
  };
  const numAmb = ambientes.sala + ambientes.cozinha + ambientes.quarto;
  let fase = 0;
  // for (let i = 0; i < numAmb; i++) {
  //   content.push(
  //     <div className="container" style={{ paddingTop: `100px` }}>
  //       <div className="row align-items-center justify-content-center">
  //         <h1>{ambientes.sala}</h1>,
  //       </div>
  //     </div>
  //   );
  // }

  var abas = [];
  const tabis = () => {
    for (var i = 0; i < ambientes.length; i++) {
      abas.push(
        <Tab key={i} eventKey={ambientes[i].nome} title={ambientes[i].nome}>
          <SubTabs3 ambiente={i}>{i}</SubTabs3>
        </Tab>
      );
    }
  };
  tabis();
  return (
    <div className="container container2" style={{ paddingTop: `100px` }}>
      <div className="row align-items-center justify-content-center">
        <div className="col text-center">
          <div className="row">
            <h1
              style={{
                fontFamily: `gBold`,
                fontSize: `2rem`,
                color: `#cb3638`,
              }}
            >
              {" "}
              SEGUNDO,
            </h1>
          </div>
          <div className="row">
            <h1 style={{ fontSize: `2rem` }}>
              SELECIONE OS ITENS QUE VOCÊ QUER ORÇAR{" "}
            </h1>
          </div>
          <div
            className="tabs"
            style={{
              border: `grey solid 1px`,
              borderRadius: `10px`,
              padding: `10px`,
            }}
          >
            <Tabs
              id="uncontrolled-tab-example"
              onSelect={() => {
                for (let i = 0; i < ambientes.length; i++) {
                  dispatch(changeState("padrao", i));
                  $(document).ready(function () {
                    resize();
                  });
                }
              }}
            >
              {abas}
            </Tabs>
          </div>
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Button
              onClick={() => {
                dispatch(next());
              }}
            >
              Ver Orcamento
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Pag3;
