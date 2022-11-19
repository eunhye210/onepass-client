/* global chrome */
import React from "react";
import ReactDOM from "react-dom/client";

import WelcomePopup from "./components/WelcomePopup";
import MainPopup from "./components/MainPopup";

import "./index.css";

const isLogin = localStorage.getItem("userId");

const root = ReactDOM.createRoot(document.getElementById("popup"));
root.render(isLogin ? <MainPopup /> : <WelcomePopup />);
