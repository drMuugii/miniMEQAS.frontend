import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TESTRoutes from "./MuiTest/TESTRoutes";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <TESTRoutes /> */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
