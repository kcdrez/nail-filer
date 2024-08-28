import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <ToastContainer theme="colored" />
      <HomePage />
    </div>
  );
};

export default App;
