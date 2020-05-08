import React from "react";
import Header from "../Common/Header";
import Layout from "../Common/Layout";
import Footer from "../Common/Footer";
import Content from "../Common/Content";
import Col from "react-bootstrap/Col";
import Projetos from "./Projetos";
import { useSelector } from "react-redux";
import Confidencial from "../Common/Confidencial";

const Home = () => {
  const num = localStorage.getItem("numero");
  const Num = JSON.parse(num);
  const counter = useSelector((state) => state.loggedin);

  return (
    <div>
      <div id="aqui" style={{ height: `100vh`, backgroundColor: `black` }}>
        <Layout>
          <Header />
          <Content>
            <Col
              xs={11}
              md={8}
              lg={5}
              className="text-center"
              style={{
                color: `white`,
                backgroundColor: `rgba(0, 0, 0, 0.6)`,
                borderRadius: `30%`,
                boxShadow: `rgba(0, 0, 0, 0.6) 0px 0px 80px 160px`,
              }}
            >
              <h1 className="display-3">
                Bem Vindo à <br /> Arqexperience!
              </h1>
              {/* {counter}
            {!counter ? <Confidencial /> : ""} */}
              <br />
              <p style={{ fontSize: `1.25rem` }}>
                Este site foi desenvolvido com a intenção de testar nossas novas
                ferramentas antes mesmo do lançamento. <br /> <br /> Fique à
                vontade para experienciar tudo, porém saiba que estes produtos
                não estão em sua forma final.{" "}
              </p>
            </Col>
          </Content>
        </Layout>
      </div>
      <Projetos />
      <Footer />
    </div>
  );
};
export default Home;
