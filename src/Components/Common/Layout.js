import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Layout extends Component {
  render() {
    return (
      <Container fluid style={{ height: `100%`, padding: 0 }}>
        {this.props.children}
      </Container>
    );
  }
}
