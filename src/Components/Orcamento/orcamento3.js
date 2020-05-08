import React from "react";
import Headerorc from "./Header/headerorc";
import Pag1 from "./Pag1/pag1";
import { useSelector } from "react-redux";
import Pag2 from "./Pag2/pag2";
import Pag3 from "./Pag3/pag3";
import $ from "jquery";
import Swiper from "swiper";
import Pag4 from "./Pag4/Pag4";
import Pag5 from "./Pag5/Pag5";
import Footerorc from "./Footer/footerorc";
const Orcamento = () => {
  const etapa = useSelector((state) => state.etapa);
  return (
    <div>
      <Headerorc />
      {etapa === 1 ? <Pag1 /> : ""}
      {etapa === 2 ? <Pag2 /> : ""}
      {etapa === 3 ? <Pag3 /> : ""}
      {etapa === 4 ? <Pag4 /> : ""}
      {etapa === 5 ? <Pag5 /> : ""}
      <Footerorc />
    </div>
  );
};

export default Orcamento;
