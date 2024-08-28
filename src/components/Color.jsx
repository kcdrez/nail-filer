import React, { useContext } from "react";

import { ColorContext } from "../context/colorContext";

const Color = ({ color, canRemove = false }) => {
  const { removeColor } = useContext(ColorContext);

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
      {canRemove && (
        <button className="btn btn-danger" onClick={() => removeColor(color)}>
          Remove
        </button>
      )}
    </div>
  );
};

export default Color;
