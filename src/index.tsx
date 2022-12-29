import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {HashRouter, Navigate, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter >
    <Routes>
    <Route path="/:cid?/*" element={<App />} />
    <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    </HashRouter>

  </React.StrictMode>
);
