import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InvitationContainer from "./containers/InvitationContainer";
import AdminContainer from "./containers/AdminContainer";
import RequireAuthRoute from "./shared/components/RequiredAuthRoute";
import LoginContainer from "./containers/LoginContainer";
import RequireUnauthRoute from "./shared/components/RequiredUnauthRoute";

const App = () => (
  <Router>
    <Switch>
      <RequireUnauthRoute path="/login" exact component={LoginContainer} />
      <RequireAuthRoute path="/admin" exact component={AdminContainer} />
      <Route path="/:id?" component={InvitationContainer} />
    </Switch>
  </Router>
);

export default App;
