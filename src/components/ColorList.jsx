import React, { useContext } from "react";

import { ColorContext } from "../context/colorContext";
import Color from "./Color";

const ColorList = () => {
  const { colorList } = useContext(ColorContext);

  return (
    <ul className="mt-3">
      {colorList.map((color, index) => {
        return (
          <div key={index}>
            <li>
              <Color color={color} canRemove />
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default ColorList;
