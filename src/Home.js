import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

export default function Home(props) {
  return (
    <Container className="Home">
      <Row>
        <Col>
          <h5>Hello , I'm</h5>
          <h3>Ayokunnumi Andu</h3>
          <h4>
            A passionate Junior Front-End Developer focused on crafting
            user-friendly web experiences.
          </h4>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}
