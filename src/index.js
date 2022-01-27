import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import store from "./../src/Observable/TodoStore";
import { Provider } from "mobx-react";
import App from "./components/App/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
