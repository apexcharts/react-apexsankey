// load ApexSankey - must be imported before using the component
import "apexsankey";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// example: set license if you have one
// import { setApexSankeyLicense } from "react-apexsankey";
// setApexSankeyLicense("your-license-key-here");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
