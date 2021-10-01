import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyled from "./global/styled";
import { BaseCSS } from "styled-bootstrap-grid";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyled />
        <BaseCSS />
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
