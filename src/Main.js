import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import "./components/style.css";
import Register from "./components/pages/register";
import ChatApp from "./components/pages/chat/ChatApp";

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
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
        {/*
            <Route path="/portfolios/:id">
              <Dashboard />
            </Route>
          */}

        <ChatApp />
      </Switch>
      <ChatApp />
    </Router>
  );
}
