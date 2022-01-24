import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { APP, ABOUT } from "./constants/url";
import App from "./components/App/App";
import About from "./pages/about";

ReactDOM.render(
  <BrowserRouter>
    <Routes>         
      <Route path={ABOUT} element={<About />} />
      <Route path={APP} element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
