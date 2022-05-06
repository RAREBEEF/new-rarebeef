import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Loading from "./components/Loading";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
