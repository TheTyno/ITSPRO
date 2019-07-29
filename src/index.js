import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "./components/menu";
import Card from "./components/card";
import Jumbotron from "./components/jumbotron";
import informacionInicio from "./data/informacionInicio.json";
import Badge from "react-bootstrap/Badge";
import "./styles.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
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

function App2() {
  return (
    <Container>
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
      <br />
      <h1 align="center">
        <Badge variant="secondary">PORTAFOLIO</Badge>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App2 />, rootElement);
