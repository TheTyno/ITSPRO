import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Contacto() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>CONTACTO</Card.Header>
        <Card.Body>
          <Card.Title>ITSPRO Central America SA</Card.Title>
          <Card.Text align="center">
            <b>CEO:</b> Edgar Dieguez <br />
            <b>Telefóno:</b> 57093134 <br />
            <b>Correo Electronico:</b> edieguez@itspro.com.gt
          </Card.Text>
          <Button variant="outline-primary">Contactanos</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Guatemala 2019</Card.Footer>
      </Card>
    </div>
  );
}
