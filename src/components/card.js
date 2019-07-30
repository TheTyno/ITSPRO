import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function carta(props) {
  return (
    <Card
      style={{ width: "25rem" }}
      bg="outline-primary"
      border="primary"
      text="black"
    >
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>ITSPRO</Card.Title>
        <Card.Text>
          Este es un ejemplo de una elemento del portafolio. Aqui se pone una
          foto del trabajo y una pequena descripcion de lo que se hizo en este
          trabajo. en el titulo dond dice ITSPRO se pone el nombre de la empresa
          a la cual se le hizo el trabajo...
        </Card.Text>
        <Button variant="outline-primary">Este boton no hace nada</Button>
      </Card.Body>
    </Card>
  );
}
