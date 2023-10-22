import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/layouts/Modulate";
import "@/assets/styles/app.scss";

ReactDOM.createRoot(document.getElementById("modulate")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
