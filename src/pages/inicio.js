import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import informacionInicio from "../data/informacionInicio";
import Jumbotron from "../components/jumbotron";

export default function Inicio() {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col>
          <Jumbotron
            titulo={informacionInicio.quienes_somos.titulo}
            parrafo={informacionInicio.quienes_somos.parrafo}
          />

          <Jumbotron
            titulo={informacionInicio.nuestra_mision.titulo}
            parrafo={informacionInicio.nuestra_mision.parrafo}
          />

          <Jumbotron
            titulo={informacionInicio.nuestra_vision.titulo}
            parrafo={informacionInicio.nuestra_vision.parrafo}
          />

          <Jumbotron
            titulo={informacionInicio.nuestros_valores.titulo}
            parrafo={informacionInicio.nuestros_valores.parrafo}
          />
        </Col>
      </Row>
    </Container>
  );
}
