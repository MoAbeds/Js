import React, { Component } from "react";
import { Text, View } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";
import MainHome from "../../Containers/MainHome";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene hideNavBar>
            <Scene key="Home" hideNavBar initial component={MainHome} />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
