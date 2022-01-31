import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App/App.tsx";
import About from "./pages/about.tsx";
import NotFound from "./pages/not_found.tsx";
import SiteRoutes from "./constants/url.ts";

const { ABOUT, NOT_FOUND, APP } = SiteRoutes;

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path={ABOUT} element={<About />} />
        <Route path={APP} element={<App />} />
        <Route path={NOT_FOUND} element={<NotFound />} />
      </Routes>
     </BrowserRouter>
    
  </Provider>,
  document.getElementById("root")
);
