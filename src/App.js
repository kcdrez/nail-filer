import React, { useState, useEffect } from "react";

// import styles from "./styles.css";

const App = () => {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  function addColor() {
    setErrorMsg("");
    const exists = colorList.find((c) => c === color);
    if (!exists) {
      setColorList([...colorList, color]);
    } else {
      setErrorMsg(`You've already added ${color}`);
    }
  }

  function removeColor(color) {
    setColorList(colorList.filter((c) => c !== color));
  }

  function validateColor(e) {
    const regex = /[0-9A-Fa-f]+/g;
    console.log(color, e.key);

    if (color.length === 6) {
      e.preventDefault();
    } else if (!regex.test(e.key)) {
      e.preventDefault();
    }
  }

  useEffect(() => {
    const colors = window.localStorage.getItem("colors") ?? "[]";
    setColorList(JSON.parse(colors));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("colors", JSON.stringify(colorList));
  }, [colorList]);

  return (
    <>
      <h1>Welcome to the Nail Filer!</h1>
      <p>Organize and filter your nail polish colors</p>
      <div>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          onKeyPress={(e) => validateColor(e)}
        />
        <button onClick={() => addColor()}>Add</button>
        {!!errorMsg && <div>{errorMsg}</div>}
      </div>
      <ul>
        {colorList.map((color, index) => {
          return (
            <div key={index}>
              <li>
                <span>
                  <div
                    style={{
                      backgroundColor: `#${color}`,
                      height: "16px",
                      width: "16px",
                    }}
                  ></div>
                  {color}
                </span>
                <button onClick={() => removeColor(color)}>Remove</button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default App;
