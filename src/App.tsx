import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./areas";

const App: React.FunctionComponent = () => (
  <Switch>
    <Route component={HomePage} exact path="/" />
  </Switch>
);

export default App;
