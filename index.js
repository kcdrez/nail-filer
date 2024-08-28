import React from "react";
import App from "./src/App";

import "bootstrap/dist/css/bootstrap.css";
import styles from "./src/styles.css";
import "bootstrap";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
