import { createContext } from "react";

export const ColorContext = createContext({
  color: null,
  setColor: () => {},
  colorList: [],
  setColorList: () => {},
  addColor: () => {},
  removeColor: () => {},
});
