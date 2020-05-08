import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="footer text-center"
        style={{ backgroundColor: `transparent`, color: `white` }}
      >
        © 2020 Copyright:
        <a href="https://arqexpress.com.br/"> Arqexpress</a>
      </div>
    );
  }
}
