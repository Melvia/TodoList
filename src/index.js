import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteRoutes from "./constants/url";
import App from "./components/App/App";
import About from "./pages/about";
import Error from "./pages/error";

const { ABOUT, ERROR, APP } = SiteRoutes;
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={ABOUT} element={<About />} />
      <Route path={APP} element={<App />} />
      <Route path={ERROR} element={<Error />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
