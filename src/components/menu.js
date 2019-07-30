import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <Link to="/inicio">ITSPRO</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          {" "}
          <Link to="/inicio">Inicio</Link>
        </Nav.Link>
        <Nav.Link>
          {" "}
          <Link to="/portafolio">Portafolio</Link>{" "}
        </Nav.Link>
        <Nav.Link>
          <Link to="/contacto">Contacto</Link>
        </Nav.Link>
      </Nav>
      <Button variant="outline-primary">Contactanos</Button>
    </Navbar>
  );
}
