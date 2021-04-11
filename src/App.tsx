import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./areas";
import "./assets/main.css";

const App: React.FunctionComponent = () => (
  <div className="container mx-auto box-border">
    <Switch>
      <Route component={HomePage} exact path="/" />
    </Switch>
  </div>
);

export default App;
