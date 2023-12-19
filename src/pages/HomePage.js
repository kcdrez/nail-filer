import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";
import { ImageColorPicker } from "react-image-color-picker";
import useIsMountedRef from "use-is-mounted-ref";

// import useIsMounted from "../hooks/useIsMounted";

import image from "../images/rainbow.png";
import Color from "../components/Color";

const HomePage = () => {
  const [color, setColor] = useState({});
  const [colorList, setColorList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const isMountedRef = useIsMountedRef();

  useEffect(() => {
    if (isMountedRef.current) {
      const colors = JSON.parse(window.localStorage.getItem("colors") ?? "[]");
      setColorList(colors);
    }
  }, []);

  function addColor() {
    setErrorMsg("");
    const exists = colorList.find((c) => c.hex === color.hex);
    if (!exists) {
      setColorList([...colorList, color]);
    } else {
      setErrorMsg("You've already added that color");
    }
  }

  function removeColor(color) {
    setColorList(colorList.filter((c) => c !== color));
  }

  const handleColorPick = (rgbString) => {
    const hex = rgbString
      .match(/[0-9]+/g)
      .reduce((a, b) => a + (b | 256).toString(16).slice(1), "#");
    setColor({ hex });
  };

  useEffect(() => {
    window.localStorage.setItem("colors", JSON.stringify(colorList));
  }, [colorList]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Welcome to the Nail Filer!</h1>
          <p>Organize and filter your nail polish colors</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
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
          {!!errorMsg && <div className="text-danger">{errorMsg}</div>}
          <ul className="mt-3">
            {colorList.map((color, index) => {
              return (
                <div key={index}>
                  <li>
                    <Color color={color} handleRemove={removeColor} />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <ImageColorPicker
          onColorPick={handleColorPick}
          imgSrc={image}
          zoom={1}
        />
      </div>
    </div>
  );
};

export default HomePage;
