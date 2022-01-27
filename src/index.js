import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoStore from "./Observable/TodoStore";

import App from "./components/App/App";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider store={new TodoStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
