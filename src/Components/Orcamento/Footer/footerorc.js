import React from "react";

const Footerorc = () => {
  return (
    <div
      className="row justify-content-end align-items-end"
      style={{
        width: `100%`,
        bottom: `0px`,
        backgroundColor: `transparent`,
        position: `fixed`,
        zIndex: `-1`,
      }}
    >
      <div className="col-1 " style={{ width: `220px`, margin: `2%` }}>
        <img className="img-fluid" src="/media/coracao.png" alt="Coração" />
      </div>
    </div>
  );
};
export default Footerorc;
