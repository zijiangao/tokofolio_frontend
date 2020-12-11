import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import "./components/style.css";
import Register from "./components/pages/register";
import ChatApp from "./components/pages/chat/ChatApp";

export default function Main() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(`https://cryptic-sands-87652.herokuapp.com/users/dashboard`)
      .then((res) => res.json())
      .then((data) => {
        //setUser(data.user);
        setItems(Object.values(data));
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home items={items} />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/chat">
          <ChatApp />
        </Route>
        <Route path="/portfolios/:id">
          <Dashboard />
        </Route>
        <ChatApp />
      </Switch>
      <ChatApp />
    </Router>
  );
}
