import React from "react";
import "./Sidebar.scss";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import TokoService from "../../../services/api";
import { withCookies } from "react-cookie";
import Pusher from "pusher-js";
const jwt = require("jsonwebtoken");

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      userDetail: "",
    };
  }
  componentDidMount() {
    TokoService.syncRooms(this.props.cookies.get("token")).then((result) => {
      this.props.cookies.set("rooms", JSON.stringify(result.data));
      this.setState({
        rooms: result.data,
      });
    });
    this.setState({
      userDetail: jwt.decode(this.props.cookies.get("token")),
    });
    const pusher = new Pusher("639cb43c9e51d063cebf", {
      cluster: "ap1",
    });
    var channel = pusher.subscribe("rooms");
    channel.bind("insert", (newRoom) => {
      TokoService.syncRooms(this.props.cookies.get("token")).then((result) => {
        this.props.cookies.set("rooms", JSON.stringify(result.data));
        this.setState({
          rooms: result.data,
        });
      });
    });
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar
            src={`https://avatars.dicebear.com/api/human/${this.state.userDetail.name}.svg`}
          />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </div>
        <div className="sidebar__chats">
          <SidebarChat addNewChat={true} />
          {this.state.rooms ? (
            this.state.rooms.map((room) => <SidebarChat roomInfo={room} />)
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
export default withCookies(Sidebar);
