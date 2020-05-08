import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import Swaipers from "./swaipers";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "../../../../Redux/actions";
import resize from "image-map-resizer";

const SubTabs3 = (props) => {
  $(document).ready(function () {
    resize();
  });
  // $(document).ready(function () {
  //   var swiper = new Swiper(".swiper-container", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //   });
  // });
  const dispatch = useDispatch();
  const titulos = useSelector((state) => state.ambientes[props.ambiente]);
  const active = useSelector((state) => state.ambientes[props.ambiente].active);
  const mapName = `imagemap${props.children}`;
  const mapCall = `#${mapName}`;

  return (
    <div style={{ marginTop: `10px` }}>
      <Row>
        <Col xs={12} lg={5} style={{ padding: `0px` }}>
          <img
            src="/media/sampleQuarto.png"
            useMap={mapCall}
            className="img-fluid"
          />

          <map name={mapName}>
            <area
              target=""
              alt="Pendente"
              title="Pendente"
              coords="70,14,145,86"
              shape="rect"
              onClick={() => {
                dispatch(changeState("Pendentes", props.ambiente));
              }}
              style={{ cursor: `pointer` }}
            />
            <area
              target=""
              alt="Abajur"
              title="Abajur"
              coords="130,162,85,102"
              shape="rect"
              onClick={() => {
                dispatch(changeState("Abajures", props.ambiente));
              }}
              style={{ cursor: `pointer` }}
            />
            <area
              target=""
              alt="Cama"
              title="Cama"
              coords="290,97,293,135,443,180,444,222,297,253,157,211,155,159,147,152,148,118"
              shape="poly"
              onClick={() => {
                dispatch(changeState("Camas", props.ambiente));
              }}
              style={{ cursor: `pointer` }}
            />
          </map>

          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Selecione o Objeto
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onSelect={() => {
                  dispatch(changeState("Pendentes", props.ambiente));
                }}
              >
                Pendentes
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => {
                  dispatch(changeState("Abajures", props.ambiente));
                }}
              >
                Abajures
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => {
                  dispatch(changeState("Camas", props.ambiente));
                }}
              >
                Camas
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Col>
        <Col xs={12} lg={{ span: 5, offset: 2 }} style={{ padding: `0px` }}>
          {active === "Camas" ? (
            <Swaipers ambiente={props.ambiente} type="Camas" />
          ) : (
            ""
          )}
          {active === "Pendentes" ? (
            <Swaipers ambiente={props.ambiente} type="Pendentes" />
          ) : (
            ""
          )}
          {active === "Abajures" ? (
            <Swaipers ambiente={props.ambiente} type="Abajures" />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};
export default SubTabs3;
