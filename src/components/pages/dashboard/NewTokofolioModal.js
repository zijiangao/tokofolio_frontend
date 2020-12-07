import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function NewTokofolioModal({ show, handleClose, token }) {
  let [item, setItem] = useState({});
  function handleSave() {
    fetch(`http://localhost:5000/user/portfolio?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(item),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data !== null) {
          handleClose();
          alert("added successfully");
        } else {
          alert("something went wrong, try again later");
        }
      });
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Tokofolio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="name of tokofolio"
          style={{
            color: "grey",
            fontFamily: "Verdana",
            fontWeight: "bold",
            fontSize: "15px",
            backgroundColor: "white",
          }}
          size="30"
          maxlength="30"
          className="form-control"
          name="name"
          value={item.name}
          onChange={(e) => setItem({ name: e.target.value })}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Discard
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
