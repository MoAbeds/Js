import React, { Component } from "react";
import { View, Text } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";
import HeaderView from "./Containers/HeaderView";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene hideNavBar>
            <Scene hideNavBar component={HeaderView} key="Home" />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
