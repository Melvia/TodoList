import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext";

import App from "./components/App/App";


ReactDOM.render(    
    
  <ThemeContextProvider>
    <App />    
  </ThemeContextProvider>,
  document.getElementById("root")
);
