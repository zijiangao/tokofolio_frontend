import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "./logo.svg";
import { withCookies } from "react-cookie";

import { withRouter, useHistory } from "react-router-dom";

function Navibar({ cookies }) {
  let [logedIn, setLogedIn] = useState(false);
  let history = useHistory();
  function handleLogOut() {
    cookies.remove("token");
    alert("you succesfully logout");
    history.push("/");
  }
  useEffect(() => {
    setLogedIn(cookies.get("token"));
  }, [cookies.get("token")]);
  return (
    <div className="Navbar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="72"
            height="72"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">My Tokofolio</Nav.Link>
            {logedIn ? (
              <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(withCookies(Navibar));
