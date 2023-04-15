import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App/>
)

/*
  JSX - html c движком js
  <h1>123</h1> => React.createElement("h1", null, "123")
*/
