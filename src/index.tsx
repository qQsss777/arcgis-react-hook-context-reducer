import "./config"
import { render } from "react-dom";
import React from "react";
import App from './components/App'


const rootElement = document.getElementById("app");
const app = (
    <App />
);
render(app, rootElement);