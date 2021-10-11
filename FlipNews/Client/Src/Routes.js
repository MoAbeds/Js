import React, { Component } from "react";
import { View } from "react-native";
import { Scene, Router, Stack, Actions } from "react-native-router-flux";
import { FontAwesome } from "@expo/vector-icons";

import MainAuth from "./Components/Auth/MainAuth";
import MainHomeView from "./Containers/MainHomeView";
import ProfileView from "./Containers/ProfileView";
import SavedArticles from "./Containers/SavedArticles";
import StartingPage from "./Containers/StartingPage";
import LoveReading from "./Containers/LoveReading";
import WebViewCom from "./Containers/WebViewCom";
import { getToken } from "./utils/Auth";
export default class Routes extends Component {
  componentDidMount() {
    let token = getToken();
    console.log(token);
    if (token) {
      return Actions.main();
    } else {
      return Actions.auth();
    }
  }

  render() {
    const PageIcon = ({ focused, iconName }) => {
      return (
        <View
          style={{
            backgroundColor: focused ? "white" : "",
            borderRadius: focused ? 20 : 0,
            width: 40,
            height: 40
          }}
        >
          <FontAwesome
            size={20}
            name={iconName}
            style={{
              color: focused ? "#293551" : "white",
              textAlign: "center",
              paddingBottom: 10,
              marginTop: 10
            }}
          />
        </View>
      );
    };
    return (
      <Router>
        <Stack>
          <Scene hideNavBar>
            <Scene hideNavBar component={StartingPage} key="Starting" />
            <Scene hideNavBar component={LoveReading} key="ChooseTobic" />
          </Scene>

          <Scene key="auth" initial hideNavBar>
            <Scene key="MainAuth" initial hideNavBar component={MainAuth} />
          </Scene>

          <Scene
            key="main"
            tabs
            tabBarStyle={{ backgroundColor: "#293551" }}
            showLabel={false}
            hideNavBar
          >
            <Scene
              iconName="newspaper-o"
              icon={PageIcon}
              hideNavBar
              component={MainHomeView}
              key="Home"
            />

            <Scene
              iconName="bookmark-o"
              icon={PageIcon}
              hideNavBar
              component={SavedArticles}
              key="Loved"
            />

            <Scene
              iconName="user-o"
              icon={PageIcon}
              hideNavBar
              component={ProfileView}
              key="Profile"
              initial
            />
          </Scene>

          <Scene initial hideNavBar component={WebViewCom} key="WebView" />
        </Stack>
      </Router>
    );
  }
}
