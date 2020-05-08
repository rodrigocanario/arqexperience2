import React, { Component } from "react";

export default class Headerorc extends Component {
  render() {
    return (
      <div
        style={{
          width: `100%`,
          height: `auto`,
          backgroundColor: `black`,
          position: `absolute`,
        }}
      >
        <div className="col-3 align-center" style={{ width: `220px` }}>
          <img
            className="img-fluid"
            src="/media/logoarq.png"
            alt="Logo Arqexpress"
          />
        </div>
      </div>
    );
  }
}
