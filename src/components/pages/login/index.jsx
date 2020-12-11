import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import moment from "moment";
import { withCookies } from "react-cookie";
import { withRouter } from "react-router-dom";
import "./style.css";
import Navibar from "../../Navibar";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrormsg] = useState("");

  useEffect(() => {
    console.log("email", email);
    console.log("password", password);
  }, [email, password]);

  const LoginUser = () => {
    //check stuff
    if (email === "" || password === "") {
      //show error message
      setErrormsg("All fields required");
    } else {
      setErrormsg("");
      api.login(email, password, props, setErrormsg);
      //do post to /users/login
    }
  };

  return (
    <div
      className="container-fluid other-background login"
      style={{
        backgroundImage: "url('/background2.svg')",
      }}
    >
      {/* <form class="form-signin" method="POST" action="/users/login"> */}
      <Navibar></Navibar>

      <h1 class="h3 mt-3 mb-3 font-weight-normal">Please Sign In</h1>
      <h3 className="text-danger">{errorMsg}</h3>
      <div className="container">
        <div className="form-group">
          <label for="email">Email</label>
          <label htmlfor="inputEmail" class="sr-only">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            required=""
            autofocus=""
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="password" class="sr-only">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="checkbox mb-3"></div>
        </div>
        <button class="btn btn-primary" onClick={LoginUser}>
          Sign In
        </button>
      </div>
    </div>
  );
}
export default withRouter(withCookies(Login));
