import React, { Component } from "react";
import Row from "react-bootstrap/Row";

export default class Content extends Component {
  render() {
    return (
      <Row
        className="align-items-center justify-content-center"
        style={{ height: `100%` }}
      >
        {this.props.children}
      </Row>
    );
  }
}
