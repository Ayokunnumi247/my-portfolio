import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./SetNavbar.css";

export default function SetNavbar(props) {
  return (
    <div className="SetNavbar">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Ayokunnumi Andu</Navbar.Brand>
          <Nav className="justify-content-end  component">
            <Nav.Link href="#home" className="ms-3">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="ms-3">
              About
            </Nav.Link>
            <Nav.Link href="#Work" className="ms-3">
              Work
            </Nav.Link>
            <Nav.Link href="#Connect" className="ms-3">
              Connect
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
