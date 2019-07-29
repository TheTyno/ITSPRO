import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function Menu() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="inicio">ITSPRO</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="inicio">Inicio</Nav.Link>
        <Nav.Link href="portafolio">Portafolio</Nav.Link>
        <Nav.Link href="contacto">Contacto</Nav.Link>
      </Nav>
      <Button variant="outline-info">Contactanos</Button>
    </Navbar>
  );
}
