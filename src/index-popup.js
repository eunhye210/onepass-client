import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, MemoryRouter as Router } from "react-router-dom";

import WelcomePopup from "./components/chromeExtensions/WelcomePopup";
import MainPopup from "./components/chromeExtensions/MainPopup";
import PasswordGenerator from "./components/chromeExtensions/PasswordGenerator";
import PopupError from "./components/chromeExtensions/PopupError";

import "./index.css";

const isLogin = localStorage.getItem("userId");

const root = ReactDOM.createRoot(document.getElementById("popup"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={isLogin ? <MainPopup /> : <WelcomePopup />} />
      <Route path="/home" element={<WelcomePopup />} />
      <Route path="/main" element={<MainPopup />} />
      <Route path="/password" element={<PasswordGenerator />} />
      <Route path="*" element={<PopupError />} />
    </Routes>
  </Router>
);
