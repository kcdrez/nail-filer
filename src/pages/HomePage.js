import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

import ColorList from "../components/ColorList";
import ImageSelector from "../components/imageSelector";
import ColorPicker from "../components/colorPicker";

import { ColorContext } from "../context/colorContext";

const HomePage = () => {
  const [color, setColor] = useState({ hex: "#FFFFFF" });
  const [colorList, setColorList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const colorContextValue = {
    color,
    setColor,
    colorList,
    setColorList,
    addColor,
    removeColor,
  };

  useEffect(() => {
    const colors = JSON.parse(window.localStorage.getItem("colors") ?? "[]");
    setColorList(colors);
  }, []);

  function addColor() {
    const exists = colorList.find((c) => c.hex === color.hex);
    if (!exists) {
      setColorList([...colorList, color]);
      toast("Successfully added " + color.hex);
    } else {
      toast("You've already added " + color.hex);
    }
  }

  function removeColor(color) {
    setColorList(colorList.filter((c) => c !== color));
    toast("Removed " + color.hex);
  }

  useEffect(() => {
    window.localStorage.setItem("colors", JSON.stringify(colorList));
  }, [colorList]);

  return (
    <div className="container">
      <ColorContext.Provider value={colorContextValue}>
        <div className="row">
          <div className="col">
            <h1>Welcome to the Nail Filer!</h1>
            <p>Organize and filter your nail polish colors</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="view-colors-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#view-colors"
                  type="button"
                  role="tab"
                  aria-controls="view-colors"
                  aria-selected="true"
                >
                  View all Colors
                </button>
                <button
                  className="nav-link"
                  id="photo-selector-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#photo-selector"
                  type="button"
                  role="tab"
                  aria-controls="photo-selector"
                  aria-selected="false"
                >
                  Find from Photo
                </button>
                <button
                  className="nav-link"
                  id="select-color-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#select-color"
                  type="button"
                  role="tab"
                  aria-controls="select-color"
                  aria-selected="false"
                >
                  Color Selector
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="view-colors"
                role="tabpanel"
                aria-labelledby="view-colors-tab"
              >
                <ColorList />
              </div>
              <div
                className="tab-pane fade"
                id="photo-selector"
                role="tabpanel"
                aria-labelledby="photo-selector-tab"
              >
                <ImageSelector />
              </div>
              <div
                className="tab-pane fade"
                id="select-color"
                role="tabpanel"
                aria-labelledby="select-color-tab"
              >
                <ColorPicker />
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </ColorContext.Provider>
    </div>
  );
};

export default HomePage;
