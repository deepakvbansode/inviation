import React from "react";
import { Route, Redirect } from "react-router-dom";
import Authentication from "../utitlity/sessionProvider";
const RequireAuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return Authentication.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `/login`
          }}
        />
      );
    }}
  />
);

export default RequireAuthRoute;
