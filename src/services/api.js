import axios from "axios";
import qs from "qs";
import moment from "moment";
import { withCookies } from "react-cookie";

const baseUrl = "https://cryptic-sands-87652.herokuapp.com/";

// https://github.com/axios/axios#creating-an-instance
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000, // 5000ms = 5s
  headers: { "X-Custom-Header": "foobar" },
});

const tokofolioApi = {
  login: (email, password, props, setErrormsg) => {
    axiosInstance
      .post("/users/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (!response.data.success) {
          return setErrormsg("Error occurred in login, please try again");
        }
        props.cookies.set("token", response.data.token, {
          path: "/",
          expires: moment.unix(response.data.expiresAt).toDate(),
          // maxAge: 3600,
        });

        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setErrormsg("Error occurred in login, please try again");
      });
  },
  // add home

  // add register
  // add dashboard
  // chat box
  sendMessage: (name, room, message) => {
    console.log(name);
    return axiosInstance.post("/api/v1/message/new", {
      name: name,
      room: room,
      message: message,
    });
  },
  syncMessage: () => {
    return axiosInstance.get("/api/v1/message/sync", {});
  },
  syncMessageByRoom: (room) => {
    return axiosInstance.get("/api/v1/message/syncbyroom/" + room, {});
  },
  addRoom: (from, to) => {
    return axiosInstance.post("/api/v1/room/new", {
      from: from,
      to: to,
    });
  },
  syncRooms: (token) => {
    return axiosInstance.get("/api/v1/room/sync", {
      headers: {
        auth_token: token,
      },
    });
  },
  findRoom: (room) => {
    return axiosInstance.get("/api/v1/room/" + room, {});
  },

  register: (email, password, props, setErrormsg) => {
    axiosInstance
      .post("/users/register", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (!response.data.success) {
          return setErrormsg("Error occurred in register, please try again");
        }
        props.cookies.set("token", response.data.token, {
          path: "/",
          expires: moment.unix(response.data.expiresAt).toDate(),
        });

        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setErrormsg("Error occurred in register, please try again");
      });
    // add home
    // add dashboard
    // chat box
  },
};

export default withCookies(tokofolioApi);
