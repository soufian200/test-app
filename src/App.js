import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";


export default function BasicExample() {
  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
