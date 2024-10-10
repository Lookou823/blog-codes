import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Demo from "../src/demo.tsx";
import MultiItems from "../src/multi-items.tsx";
import MultiItemsDelegation from "../src/multi-items-delegation.tsx";
// import Demo from "../src/demo2.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MultiItemsDelegation /> */}
    <MultiItems />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
