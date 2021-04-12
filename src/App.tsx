import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, Rocket } from "./pages";
import "./assets/main.css";

const App: React.FunctionComponent = () => (
  <div className="container mx-auto box-border">
    <Switch>
      <Route component={HomePage} exact path="/" />
      <Route component={Rocket} path="/rocket" />
    </Switch>
  </div>
);

export default App;
