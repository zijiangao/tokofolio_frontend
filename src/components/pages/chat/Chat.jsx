import { AttachFile } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import TokoService from "../../../services/api";
import { Avatar, IconButton } from "@material-ui/core/";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./Chat.scss";
import Moment from "react-moment";
import { withCookies } from "react-cookie";
import Pusher from "pusher-js";

const jwt = require("jsonwebtoken");

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      userDetail: "",
      room: this.props.cookies.get("selectedRoom"),
      roomInfo: "",
      messages: [],
    };
  }

  componentDidMount() {
    this.setState({
      userDetail: jwt.decode(this.props.cookies.get("token")),
    });

    TokoService.syncMessageByRoom(this.props.cookies.get("selectedRoom")).then(
      (response) => {
        this.setState({
          messages: response.data,
        });
      }
    );
    TokoService.findRoom(this.state.room).then((response) => {
      this.setState({
        roomInfo: response.data,
      });
    });

    const pusher = new Pusher("639cb43c9e51d063cebf", {
      cluster: "ap1",
    });
    var channel = pusher.subscribe("messages");
    channel.bind("insert", (newMessage) => {
      if (newMessage.room === this.state.room) {
        TokoService.syncMessageByRoom(
          this.props.cookies.get("selectedRoom")
        ).then((response) => {
          this.setState({
            messages: response.data,
          });
        });
      }
    });
    this.scrollToBottom();
  }
  componentDidUpdate(prevProps) {
    if (this.state.room !== prevProps.cookies.get("selectedRoom")) {
      this.setState({
        room: this.props.cookies.get("selectedRoom"),
      });
      TokoService.syncMessageByRoom(
        this.props.cookies.get("selectedRoom")
      ).then((response) => {
        this.setState({
          messages: response.data,
        });
      });
      TokoService.findRoom(this.props.cookies.get("selectedRoom")).then(
        (response) => {
          this.setState({
            roomInfo: response.data,
          });
        }
      );
    }
    this.scrollToBottom();
  }

  sendMessage(e) {
    e.preventDefault();
    TokoService.sendMessage(
      this.state.userDetail.name,
      this.state.room,
      this.state.input
    );
    this.setState({
      input: "",
    });
  }
  setInput(e) {
    this.setState({
      input: e.target.value,
    });
  }
  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div className="chat">
        <div className="chat__header">
          {!this.state.roomInfo
            ? ""
            : this.state.roomInfo.usernames.map((username) => {
                if (username !== this.state.userDetail.name) {
                  return (
                    <Avatar
                      src={`https://avatars.dicebear.com/api/human/${username}.svg`}
                    />
                  );
                }
              })}
          <div className="chat__headerInfo">
            {!this.state.roomInfo
              ? ""
              : this.state.roomInfo.usernames.map((username) => {
                  if (username !== this.state.userDetail.name) {
                    return <h3>{username}</h3>;
                  }
                })}
            <p>Last seen at...</p>
          </div>
          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="chat__body">
          {this.state.messages.map((message) => (
            <p
              className={`chat__message ${
                message.name === this.state.userDetail.name && "chat__receiver"
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">
                <Moment unix>{message.timestamp.slice(0, -3)}</Moment>
              </span>
            </p>
          ))}
          <div
            ref={(el) => {
              this.el = el;
            }}
          />
        </div>
        <div className="chat__footer">
          <InsertEmoticon />
          <form>
            <input
              value={this.state.input}
              onChange={(e) => {
                this.setInput(e);
              }}
              placeholder="Type a message"
              type="text"
            />
            <button
              onClick={(e) => {
                this.sendMessage(e);
              }}
              type="submit"
            >
              Send a message
            </button>
          </form>
          <MicIcon />
        </div>
      </div>
    );
  }
}
export default withCookies(Chat);
