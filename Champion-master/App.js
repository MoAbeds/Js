import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./Src/Containers";
import { Container } from "native-base";
import { Provider } from "react-redux";
import store from "./Src/Redux/Store";
export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Main />
      </Container>
    </Provider>
  );
}
