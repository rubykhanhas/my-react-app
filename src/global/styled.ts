import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        font-size: 1.6em;
        font-family: sans-serif;
    }
`;

export default GlobalStyled;
