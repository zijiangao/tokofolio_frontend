import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import TokoService from "../../../services/api";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
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
    //console.log(props);
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
      //console.log(this.state.room);
      console.log(newMessage);
      if (newMessage.room === this.state.room) {
        TokoService.syncMessageByRoom(
          this.props.cookies.get("selectedRoom")
        ).then((response) => {
          console.log(response.data);
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
        console.log(response.data);
      });
      TokoService.findRoom(this.props.cookies.get("selectedRoom")).then(
        (response) => {
          console.log(response.data);
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
    //console.log(this.state.room);
    //console.log("you typed >>>", this.state.input);
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
    //console.log(this.state);
    this.setState({
      input: e.target.value,
    });
  }
  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    //console.log(this.props.messages[0].timestamp);
    // console.log(jwt.decode(this.props.cookies.get("token")));
    // console.log(this.props.cookies.get("token"));
    console.log(this.state.room);
    console.log(this.state.roomInfo);
    console.log(this.props.cookies.get("selectedRoom"));

    return (
      <div className="chat">
        <div className="chat__header">
          <Avatar />
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
                <Moment unix>{message.timestamp}</Moment>
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
