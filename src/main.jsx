import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CyberProvider } from "./context/CyberContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CyberProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CyberProvider>
  </AuthProvider>
);