import React, { Component } from "react";
import { View, Text } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";
import { AntDesign } from "@expo/vector-icons";

import MainHomeView from "../../Containers/MainHomeView";
import SearchView from "../../Containers/SearchView";
import NotificationsView from "../../Containers/NotificationsView";
import ProfileView from "../../Containers/ProfileView";
import ChooseLanguagePage from "../../Containers/ChooseLanguagePage";
import SavedArticles from "../../Containers/SavedArticles";
import StartingPage from "../../Containers/StartingPage";
import LoveReading from "../../Containers/LoveReading";

export default class ArRoutes extends Component {
  render() {
    const PageIcon = ({ title, focused, iconName }) => {
      return (
        <View
          style={{
            borderBottomColor: focused ? "#E3170A" : "",
            borderBottomWidth: 2,
            width: 55
          }}
        >
          <AntDesign
            size={20}
            name={iconName}
            style={{
              color: focused ? "white" : "gray",
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
            <Scene
              hideNavBar
              component={ChooseLanguagePage}
              key="ChooseLanguage"
            />
            <Scene initial hideNavBar component={StartingPage} key="Starting" />
            <Scene hideNavBar component={LoveReading} key="ChooseTobic" />
          </Scene>

          <Scene
            key="main"
            tabs
            tabBarStyle={{ backgroundColor: "black" }}
            showLabel={false}
            hideNavBar
            initial
          >
            <Scene
              iconName="user"
              icon={PageIcon}
              hideNavBar
              component={ProfileView}
              key="Profile"
            />

            <Scene
              iconName="bells"
              icon={PageIcon}
              hideNavBar
              component={NotificationsView}
              key="Notification"
            />

            <Scene
              iconName="heart"
              icon={PageIcon}
              hideNavBar
              component={SavedArticles}
              key="Loved"
            />

            <Scene
              iconName="search1"
              icon={PageIcon}
              hideNavBar
              component={SearchView}
              key="Search"
            />

            <Scene
              iconName="home"
              icon={PageIcon}
              hideNavBar
              component={MainHomeView}
              key="Home"
              initial
            />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
