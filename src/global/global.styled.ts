import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    ${reset}

    html {
        font-size: 10px;
        font-family: sans-serif;
    }

    body {
        font-size: 1.6em;
    }
`;

export default GlobalStyled;
