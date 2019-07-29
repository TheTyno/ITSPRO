import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function jumbotron(props) {
  return (
    <Jumbotron>
      <h1>{props.titulo}</h1>
      <p>{props.parrafo}</p>
    </Jumbotron>
  );
}
