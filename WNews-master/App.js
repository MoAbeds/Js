import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import AppRoutes from "./Src/Routes";
import store from "./Src/Redux/Store";

export default function App() {
  return( 
    <Provider store={store}>
       <AppRoutes />
    </Provider>

 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
