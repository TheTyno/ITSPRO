import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/card";
import Badge from "react-bootstrap/Badge";

function rendercards(value) {
  let ar = [];
  for (let i = 0; i < value; i++) {
    ar.push(
      <div key={i} align="center">
        <Card url="https://picsum.photos/286/180" />
        <br />
        <br />
      </div>
    );
  }
  return ar;
}

export default function Portafolio() {
  return (
    <Container>
      <br />
      <h1 align="center">
        <Badge variant="outline-secondary">PORTAFOLIO</Badge>
      </h1>
      <br />
      <br />
      <Row>
        <Col>{rendercards(5)}</Col>
        <Col>{rendercards(5)}</Col>
      </Row>
    </Container>
  );
}
