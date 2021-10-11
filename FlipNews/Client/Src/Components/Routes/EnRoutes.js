import React, { Component } from "react";
import { View } from "react-native";
import { Scene, Router, Stack } from "react-native-router-flux";
import { FontAwesome } from "@expo/vector-icons";

import Login from "../../Containers/Auth/Login/Login";
import LoginInput from "../../Components/Auth/Login/LoginInput";
import SignUp from "../../Containers/Auth/Signup/SignUp";
import SignupInput from "../../Components/Auth/Signup/SignupInput";
import ResetPass from "../../Containers/Auth/ResetPass";
import MainHomeView from "../../Containers/MainHomeView";
import ProfileView from "../../Containers/ProfileView";
import ChooseLanguagePage from "../../Containers/ChooseLanguagePage";
import SavedArticles from "../../Containers/SavedArticles";
import StartingPage from "../../Containers/StartingPage";
import LoveReading from "../../Containers/LoveReading";
export default class EnRoutes extends Component {
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
            <Scene
              hideNavBar
              component={ChooseLanguagePage}
              key="ChooseLanguage"
            />

            <Scene hideNavBar component={StartingPage} key="Starting" />
            <Scene hideNavBar component={LoveReading} key="ChooseTobic" />
          </Scene>

          <Scene key="auth" hideNavBar>
            <Scene key="login" hideNavBar component={Login} />
            <Scene key="loginInput" hideNavBar component={LoginInput} />
            <Scene key="signup" hideNavBar component={SignUp} />
            <Scene key="signupInput" hideNavBar component={SignupInput} />
            <Scene key="RestPasswordUser" hideNavBar component={ResetPass} />
          </Scene>

          <Scene
            key="main"
            tabs
            tabBarStyle={{ backgroundColor: "#293551" }}
            showLabel={false}
            hideNavBar
            initial
          >
            <Scene
              iconName="newspaper-o"
              icon={PageIcon}
              hideNavBar
              component={MainHomeView}
              key="Home"
              initial
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
            />
          </Scene>
        </Stack>
      </Router>
    );
  }
}
