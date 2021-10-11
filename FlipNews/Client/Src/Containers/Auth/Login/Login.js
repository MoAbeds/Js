import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import MainAuth from "../../../Components/Auth/MainAuth";
export default class Login extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View style={_styles.Container}>
        <MainAuth />
      </View>
    );
  }
}

const _styles = StyleSheet.create({
  Container: {
    height: "100%",
    backgroundColor: "white"
  }
});
