import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Forma() {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Empresa</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default function contactanos(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contactanos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Forma />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
