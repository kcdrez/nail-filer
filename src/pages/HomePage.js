import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import ColorList from "../components/ColorList";
import ImageSelector from "../components/imageSelector";
import ColorPicker from "../components/colorPicker";
import ViewMode from "../components/viewMode";
import ColorIcon from "../components/ColorIcon";

import { ColorContext } from "../context/colorContext";

const HomePage = () => {
  const [color, setColor] = useState({ hex: "#FFFFFF" });
  const [colorList, setColorList] = useState([]);
  const [viewMode, setViewMode] = useState("tile");

  const colorContextValue = {
    color,
    setColor,
    colorList,
    setColorList,
    addColor,
    removeColor,
    viewMode,
    setViewMode,
  };

  useEffect(() => {
    const colors = JSON.parse(window.localStorage.getItem("colors") ?? "[]");
    setColorList(colors);
  }, []);

  function addColor() {
    const exists = colorList.find((c) => c.hex === color.hex);
    if (!exists) {
      setColorList([...colorList, color], () => {
        console.log(colorList);
      });
      toast.success(
        <div className="d-flex align-items-center">
          Successfully added <ColorIcon color={color} className="ms-2" />
        </div>,
        { autoClose: 50000 }
      );
    } else {
      toast.warning(
        <div className="d-flex align-items-center">
          You've already added <ColorIcon color={color} className="ms-2" />
        </div>,
        { autoClose: 50000 }
      );
    }
  }

  function removeColor(color) {
    setColorList(colorList.filter((c) => c !== color));
    toast.success(
      <div className="d-flex align-items-center">
        Successfully removed <ColorIcon color={color} className="ms-2" />
        <button
          className="btn btn-sm btn-outline"
          onClick={() => {
            addColor(color);
          }}
        >
          <i className="fas fa-undo"></i>
        </button>
      </div>,
      { autoClose: 50000 }
    );
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
          <div className="col">
            <ViewMode />
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
