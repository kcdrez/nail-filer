import React, { useContext, useState } from "react";
import { ImageColorPicker } from "react-image-color-picker";

import { ColorContext } from "../context/colorContext";
import Color from "./Color";
import image from "../images/rainbow.png";

const ImageSelector = ({}) => {
  const { color, setColor, addColor } = useContext(ColorContext);
  const [selectedImage, setSelectedImage] = useState(image);

  const handleColorPick = (rgbString) => {
    const hex = rgbString
      .match(/[0-9]+/g)
      .reduce((a, b) => a + (b | 256).toString(16).slice(1), "#");
    setColor({ hex });
  };

  return (
    <div>
      Upload an image:
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          const imgURL = URL.createObjectURL(event.target.files[0]);
          setSelectedImage(imgURL);
        }}
      />
      <div className="img-color-picker">
        {selectedImage && (
          <ImageColorPicker
            onColorPick={handleColorPick}
            imgSrc={selectedImage}
          />
        )}
      </div>
      {color && (
        <div>
          Selected Color:
          <Color color={color} />
        </div>
      )}
      <button
        className="btn btn-primary"
        onClick={() => addColor()}
        disabled={!color.hex}
      >
        Add Color
      </button>
      {/* {!!errorMsg && <div className="text-danger">{errorMsg}</div>} */}
    </div>
  );
};

export default ImageSelector;
