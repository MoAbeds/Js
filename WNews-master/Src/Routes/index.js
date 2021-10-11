import React, { Component } from "react";
import { View } from "react-native";
import { Scene, Router, Stack, Actions } from "react-native-router-flux";
import { FontAwesome } from "@expo/vector-icons";
import WelcomeScreen from "../Components/Welcome";
import Topic from "../Components/Topics";
import MainView from "../Components/MainView";
import WebViewCom from "../Components/MainView/WebViewCom";
export default class index extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene hideNavBar>
            <Scene hideNavBar initial component={WelcomeScreen} />
            <Scene hideNavBar key="Topics" component={Topic} />
          </Scene>

          <Scene key="main" hideNavBar>
            <Scene hideNavBar key="MainView" component={MainView} />
            <Scene hideNavBar key="WebView" component={WebViewCom} />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
