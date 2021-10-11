import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Container, Header, Content, List, ListItem } from "native-base";

export class SignUp extends Component {
  render() {
    return <Container style={_styles.Container}></Container>;
  }
}

const _styles = StyleSheet.create({
  Container: {
    height: "100%",
    backgroundColor: "white"
  }
});

export default SignUp;
