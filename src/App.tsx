import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 3em;
    font-weight: 400;
    color: black;

    &:hover {
        text-decoration: underline red;
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
