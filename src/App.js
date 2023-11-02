import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

import Color from "./components/Color";

const App = () => {
  const [color, setColor] = useState({});
  const [colorList, setColorList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

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

  useEffect(() => {
    const colors = window.localStorage.getItem("colors") ?? "[]";
    setColorList(JSON.parse(colors));
  }, []);

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
    </div>
  );
};

export default App;
