import React from "react";
import "./ChatApp.scss";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import { withCookies } from "react-cookie";
import Login from "./Login";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      showWindow: false,
    };
  }

  setWindow(state) {
    this.setState({
      showWindow: state,
    });
  }
  render() {
    return !this.state.showWindow ? (
      <div className="App">
        <IconButton
          onClick={() => {
            this.setWindow(true);
          }}
        >
          <ChatIcon />
        </IconButton>
      </div>
    ) : !this.props.cookies.get("token") ||
      this.props.cookies.get("token") === "undefined" ? (
      <div className="App">
        <Login />
        <IconButton
          onClick={() => {
            this.setWindow(false);
          }}
        >
          <ChatIcon />
        </IconButton>
      </div>
    ) : (
      <div className="App">
        <div className="app__body">
          <Sidebar />
          <Chat />
        </div>

        <IconButton
          onClick={() => {
            this.setWindow(false);
          }}
        >
          <ChatIcon />
        </IconButton>
      </div>
    );
  }
}

export default withCookies(ChatApp);
