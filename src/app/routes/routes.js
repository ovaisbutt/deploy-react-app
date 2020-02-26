import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Login } from "../views/Login";
import { Signup } from "../views/Signup";
import { Home } from "../views/Home";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

export const routes = () => {
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login"
            render={props => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={props => <Signup {...props} />}
          />
          <Route
            exact
            path="/"
            name="Home"
            render={props => <Home {...props} />}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
};
