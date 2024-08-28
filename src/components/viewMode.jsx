import React, { useContext } from "react";

import { ColorContext } from "../context/colorContext";

const ImageSelector = ({}) => {
  const { viewMode, setViewMode } = useContext(ColorContext);

  return (
    <div>
      <button
        className={`btn btn-sm ${
          viewMode === "tile" ? "btn-primary" : "btn-outline"
        }`}
        onClick={() => {
          setViewMode("tile");
        }}
      >
        <i className="fas fa-th"></i>
      </button>
      <button
        className={`btn btn-sm ${
          viewMode === "list" ? "btn-primary" : "btn-outline"
        }`}
        onClick={() => {
          setViewMode("list");
        }}
      >
        <i className="fas fa-list"></i>
      </button>
    </div>
  );
};

export default ImageSelector;
