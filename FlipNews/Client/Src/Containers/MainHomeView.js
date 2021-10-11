import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import Nlogo from "../../assets/Nlogo.png";
import { connect } from "react-redux";
import { graphql, compose, withApollo } from "react-apollo";
import { LinearGradient } from "expo-linear-gradient";

import { t } from "../Locales/index";
import { FetchNews } from "../Redux/Action/MainActions";
import {
  Container,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Header
} from "native-base";
import Cards from "../Components/Home/Cards";
import ScrollButtons from "../Components/Home/ScrollButtons";
import NewsList from "../Components/Home/NewsList";
export default class MainHomeView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container style={_styles.Container}>
        <StatusBar backgroundColor="#293551" />
        <Cards />
        <ScrollButtons />
        <NewsList />
      </Container>
    );
  }
}

const _styles = StyleSheet.create({
  Container: {
    height: "100%",

    backgroundColor: "#E8E8E8"
  },
  Header: { backgroundColor: "white", elevation: 0 },
  Image: {
    height: 60,
    width: 40,
    marginLeft: 15,
    marginTop: 25,
    alignSelf: "center"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};
