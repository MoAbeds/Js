import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { Client } from "./Src/Graphql/Client";
import Routes from "./Src/Routes";
import store from "./Src/Redux/Store";
export default function App() {
  return (
    <ApolloProvider client={Client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  );
}
