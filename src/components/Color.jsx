import React from "react";

const Color = ({ color, handleRemove }) => {
  return (
    <div className="input-group input-group-sm">
      <span className="input-group-text">
        <div
          className="square"
          style={{
            backgroundColor: `${color.hex}`,
          }}
        ></div>
      </span>
      <span className="input-group-text">{color.hex}</span>
      <button className="btn btn-danger" onClick={() => handleRemove(hexCode)}>
        Remove
      </button>
    </div>
  );
};

export default Color;
