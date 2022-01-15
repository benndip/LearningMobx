import { StrictMode } from "react";
import ReactDOM from "react-dom";
import TodoStore from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App todoStore={TodoStore} />
  </StrictMode>,
  rootElement
);
