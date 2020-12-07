import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";

import "./Login.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="login__page ">
        <div className="login__container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Whatsapp.webp"
            alt=""
          />
          <div className="login__text">
            <h1>Sign in to Tokofolio Chat</h1>
          </div>

          <Button>
            <Link to="/login" className="login__link">
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}
export default Login;
