import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <HomePage />
    </div>
  );
  // return <TestPage />;
};

export default App;
