// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // This automatically picks App.jsx now
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
