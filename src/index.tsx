import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl as HTMLElement);

setTimeout(() => {
  if (!rootEl) {
    return;
  }

  rootEl.style.height = "auto";
  rootEl.style.overflow = "visible";
}, 1000);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
