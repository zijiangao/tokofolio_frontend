import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { withCookies } from "react-cookie";

function AddNewItemModal({
  show,
  handleClose,
  data = {},
  cookies,
  portfolioID,
}) {
  let [item, setItem] = useState(data);
  function handleSave() {
    let token = cookies.get("token");
    fetch(
      `http://localhost:5000/users/dashboard/new?token=${token}&portfolioId=${portfolioID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(item),
      }
    )
      .then((data) => data.json())
      .then((data) => {
        if (data !== null) {
          handleClose();
          alert("added succefully");
        } else {
          alert("something went wrong, try again later");
        }
      });
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new tokofolio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {["symbol", "date", "qty", "price"].map((field) => (
          <div class="form-group">
            <input
              type="text"
              placeholder={field === "qty" ? "quantity" : field}
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
              name={field}
              value={item[field] || ""}
              onChange={(e) =>
                setItem({ ...item, [e.target.name]: e.target.value })
              }
            />
          </div>
        ))}
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

export default withCookies(AddNewItemModal);
