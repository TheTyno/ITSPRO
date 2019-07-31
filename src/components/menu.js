import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <Link to="/inicio">
          <img
            src={require("../data/logo.png")}
            alt="ITSPRO"
            style={{ width: "200px", height: "55px" }}
          />
        </Link>
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
      <Button
        variant="outline-primary"
        onClick={() => props.setShowModal(true)}
      >
        Contactanos
      </Button>
    </Navbar>
  );
}
