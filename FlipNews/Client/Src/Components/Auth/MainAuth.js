import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";

import { connect } from "react-redux";
import Login from "./Login/Login";
import SignUp from "./Signup/SignUp";
import LoginBG from "../../../assets/LoginBG.png";
import SignUpBG from "../../../assets/SignUpBG.png";
import * as Animatable from "react-native-animatable";
import { _styles } from "../../Styles/Auth/MainAuth";
import { login } from "../../Redux/Action/MainActions";

export class MainAuth extends Component {
  state = {
    Pages: "LoginPage"
  };

  //Method to toggle Auth Pages
  ToggleForms() {
    let Page = this.state.Pages;
    switch (Page) {
      case "SignupPage":
        return <SignUp />;

      case "LoginPage":
        return <Login />;

      default:
        return null;
    }
  }

  //Method to toggle Login Text Color

  toggleLoginTextColor() {
    let Page = this.state.Pages;
    switch (Page) {
      case "SignupPage":
        return "gray";

      case "LoginPage":
        return "white";

      default:
        return null;
    }
  }

  //Method to toggle Login Opacity Text

  toggleLoginOpacity() {
    let Page = this.state.Pages;
    switch (Page) {
      case "SignupPage":
        return 0.5;

      case "LoginPage":
        return 1;

      default:
        return null;
    }
  }

  //Method to toggle Signup Text color
  toggleSignUpTextColor() {
    let Page = this.state.Pages;
    switch (Page) {
      case "SignupPage":
        return "#293551";

      case "LoginPage":
        return "white";

      default:
        return null;
    }
  }

  //Method to toggle Signup Opacity Text

  toggleSignUpOpacity() {
    let Page = this.state.Pages;
    switch (Page) {
      case "SignupPage":
        return 1;

      case "LoginPage":
        return 0.5;

      default:
        return null;
    }
  }

  //Method to toggle BackGround Image based on State

  toggleBG() {
    let Page = this.state.Pages;
    switch (Page) {
      case "SignupPage":
        return SignUpBG;

      case "LoginPage":
        return LoginBG;

      default:
        return null;
    }
  }

  render() {
    return (
      <ImageBackground style={_styles.BG} source={this.toggleBG()}>
        <Animatable.View
          animation="slideInRight"
          iterationCount={1}
          direction={4000}
        >
          <View style={_styles.ViewMain}>
            <TouchableWithoutFeedback
              onPress={() =>
                this.setState({
                  Pages: "LoginPage"
                })
              }
            >
              <Text
                style={[
                  _styles.ToggleHeader,
                  {
                    opacity: this.toggleLoginOpacity(),
                    color: this.toggleLoginTextColor()
                  }
                ]}
              >
                LOGIN
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                this.setState({
                  Pages: "SignupPage"
                })
              }
            >
              <Text
                style={[
                  _styles.ToggleHeader,
                  {
                    opacity: this.toggleSignUpOpacity(),
                    color: this.toggleSignUpTextColor()
                  }
                ]}
              >
                SIGNUP
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </Animatable.View>

        {this.ToggleForms()}
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { login }
)(MainAuth);
