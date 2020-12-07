import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function AddNewItemModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete account</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Discard
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
