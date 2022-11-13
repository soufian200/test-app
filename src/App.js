import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components";
import AuthContext from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";


export default function App() {

  const [user, setUser] = useState()
  useEffect(() => {
    const user = localStorage.getItem("user")
    setUser(JSON.parse(user))
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="">
          <Navbar />
          <hr className="divider" />
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
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
