import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Loading from "./components/Loading";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
