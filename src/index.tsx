import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import App from "./pages/Todo/Todo.tsx";
import About from "./pages/About/about.tsx";
import NotFound from "./pages/NotFound/not_found.tsx";
import SiteRoutes from "./constants/url.ts";
import "./index.scss";

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
