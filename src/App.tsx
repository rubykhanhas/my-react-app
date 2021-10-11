import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { down } from "styled-breakpoints";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 3em;
    font-weight: 400;
    color: black;
    transition: all 0.3s linear;

    &:hover {
        text-decoration: underline red;
    }

    ${down("md")} {
        font-size: 4em;
        color: red;
    }
`;

function App() {
    return (
        <Container>
            <Row justifyContent="center" alignItems="center">
                <Col col="auto">
                    <Title>Hello world</Title>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
