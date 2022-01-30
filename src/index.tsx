import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App/App.tsx";
import About from "./pages/about";
import Error from "./pages/error";
import SiteRoutes from "./constants/url.ts";

const { ABOUT, ERROR, APP } = SiteRoutes;

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path={ABOUT} element={<About />} />
        <Route path={APP} element={<App />} />
        <Route path={ERROR} element={<Error />} />
      </Routes>
     </BrowserRouter>
    
  </Provider>,
  document.getElementById("root")
);
