import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
    <Route path="/:cid?/*" element={<App />} />
    
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
