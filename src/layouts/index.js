import React from "react";

import Container from "../components/container";

export default ({ children }) => (
    <Container>
        <h3>Testy McTestFace</h3>
        {children()}
    </Container>
);
