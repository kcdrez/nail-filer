import React from "react";

const ColorIcon = ({ color, className }) => {
  return (
    <div
      className={`square ${className}`}
      title={color.hex}
      style={{
        backgroundColor: `${color.hex}`,
      }}
    ></div>
  );
};

export default ColorIcon;
