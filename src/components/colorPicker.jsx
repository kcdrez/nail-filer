import React, { useContext } from "react";
import { ChromePicker } from "react-color";

import { ColorContext } from "../context/colorContext";

const ImageSelector = ({}) => {
  const { color, setColor, addColor } = useContext(ColorContext);

  return (
    <div>
      <ChromePicker
        color={color}
        onChangeComplete={(color) => setColor(color)}
      />
      <button
        className="btn btn-primary"
        onClick={() => addColor()}
        disabled={!color.hex}
      >
        Add Color
      </button>
    </div>
  );
};

export default ImageSelector;
