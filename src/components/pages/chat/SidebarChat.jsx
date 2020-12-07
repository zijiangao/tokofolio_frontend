import React from "react";
import TokoService from "../../../services/api";
import { Avatar, IconButton } from "@material-ui/core";
import "./SidebarChat.scss";
import { withCookies } from "react-cookie";
import { Link } from "react-router-dom";
const jwt = require("jsonwebtoken");

class SidebarChat extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      addNewChat: false,
      gossip: false,
    };
    this.state = {
      seed: Math.floor(Math.random() * 5000),
      userDetail: "",
    };
  }
  componentDidMount() {
    this.setState({
      userDetail: jwt.decode(this.props.cookies.get("token")),
    });
  }
  createChat() {
    const roomName = prompt("Please enter user email");
    if (roomName) {
      //do something
      TokoService.addRoom(this.state.userDetail.email, roomName);
    }
  }
  roomSelection() {
    console.log(this.props.roomInfo.roomID);
    this.props.cookies.set("selectedRoom", this.props.roomInfo.roomID);
  }
  render() {
    console.log(this.state.userDetail);
    console.log(this.props.roomInfo);
    return !this.props.addNewChat ? (
      <div
        className="sidebarChat"
        onClick={(e) => {
          this.roomSelection();
        }}
      >
        {this.props.roomInfo.usernames.map((username) => {
          if (username !== this.state.userDetail.name) {
            return (
              <Avatar
                src={`https://avatars.dicebear.com/api/human/${username}.svg`}
              />
            );
          }
        })}

        <div className="sidebarChat__info">
          {this.props.roomInfo.usernames.map((username) => {
            if (username !== this.state.userDetail.name) {
              return <h2>{username}</h2>;
            }
            <p>This is the last message</p>;
          })}
        </div>
      </div>
    ) : (
      <div
        onClick={(e) => {
          this.createChat();
        }}
        className="sidebarChat"
      >
        <h2>Add new chat</h2>
      </div>
    );
  }
}
export default withCookies(SidebarChat);
