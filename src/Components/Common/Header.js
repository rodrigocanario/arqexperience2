import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import { increment, signIn } from "../../Redux/actions/index";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ position: `absolute`, width: `100%`, zIndex: `1` }}
    >
      <Navbar.Brand
        href="/"
        style={{ letterSpacing: `1px`, fontSize: `30px`, color: `white` }}
      >
        ARQ
        <span style={{ fontFamily: "gBold" }}>EXPERIENCE</span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="justify-content-end noSelection"
        style={{ borderColor: `darkgrey`, backgroundColor: `black` }}
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end"
        style={{ textAlign: `end` }}
      >
        <Nav
          className="mr-auto"
          className="justify-content-end"
          style={{
            width: "fit-content",
            float: "right",
            backgroundColor: `black`,
            boxShadow: `0px 20px 15px 20px black`,
            padding: `2px`,
          }}
        >
          <Nav.Link href="/" style={{ color: `white` }}>
            HOME
          </Nav.Link>
          <Nav.Link href="/#projetow" style={{ color: `white` }}>
            PROJETOS
          </Nav.Link>
          <Nav.Link href="/quiz" style={{ color: `white` }}>
            QUIZ DE ESTILO
          </Nav.Link>
          <Nav.Link
            href="/orcexpress/pag1"
            style={{ letterSpacing: `1px`, color: `white` }}
          >
            ORC<span style={{ fontFamily: "gBold" }}>EXPRESS</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <Navbar fixed="top" variant="dark">
    // <Navbar.Brand href="/" style={{ letterSpacing: `1px`, fontSize: `30px` }}>
    //   ARQ
    //   <span style={{ fontFamily: "gBold" }}>EXPERIENCE</span>
    // </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //     <Nav>
    // <Nav.Link href="/" style={{ color: `white` }}>
    //   HOME
    // </Nav.Link>
    // <Nav.Link href="/#projetos" style={{ color: `white` }}>
    //   PROJETOS
    // </Nav.Link>
    // <Nav.Link href="/quiz" style={{ color: `white` }}>
    //   QUIZ DE ESTILO
    // </Nav.Link>
    // <Nav.Link
    //   href="/orcexpress/pag1"
    //   style={{ letterSpacing: `1px`, color: `white` }}
    // >
    //   ORC<span style={{ fontFamily: "gBold" }}>EXPRESS</span>
    // </Nav.Link>

    //       {/* <Button
    //         onClick={() => {
    //           dispatch(increment());
    //           dispatch(signIn());
    //         }}
    //       >
    //         +
    //       </Button> */}
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default Header;
