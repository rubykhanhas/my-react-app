import React from "react";
import { BaseCSS } from "styled-bootstrap-grid";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyled from "./global.styled";

function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <StyledThemeProvider theme={null}>
            <BaseCSS />
            <GlobalStyled />
            {children}
        </StyledThemeProvider>
    );
}

export default ThemeProvider;
