import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container } from "native-base";
import Header from "./Header";
import TodoCard from "./TodoCard";
export default class index extends Component {
  render() {
    return (
      <Container>
        <Header />
        <TodoCard />
      </Container>
    );
  }
}
