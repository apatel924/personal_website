import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

console.log("Index.js is running"); // Debug log

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
