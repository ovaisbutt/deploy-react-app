import React from "react";
import { Route } from "react-router-dom";
// import UserNetworkErrors from "../core/user_network_errors";
// import UserNetworkSuccess from "../core/user_network_success";
// import Navigation from "../core/navigation";

const MainLayout = ({ component: Component, ...rest }) => {
  //   const { isAuthenticated } = rest.auth;

  //   if (!isAuthenticated || !localStorage.getItem("tokenUpdated")) {
  //     //TODO: Use Redirect
  //     window.location = "/login";
  //     return <div></div>;
  //     //return <Redirect to="/login" />;
  //   }

  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <div>
            <p>Hello</p>
            <Component {...matchProps} />
          </div>
        );
      }}
    />
  );
};

export default MainLayout;
