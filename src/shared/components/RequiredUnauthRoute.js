import React from "react";
import { Route, Redirect } from "react-router-dom";
import Authentication from "../utitlity/sessionProvider";

const RequireUnauthRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return Authentication.isAuthenticated() ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

export default RequireUnauthRoute;
