import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";

const client = new ApolloClient({
  connectToDevTools: true,
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache({
    addTypename: false,
    dataIdFromObject: (o: any) => o?.id,
    possibleTypes: {},
  }),
});

const render = async (): Promise<void> => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>,
    document.querySelector("#root")
  );
};

// Render once
render();
