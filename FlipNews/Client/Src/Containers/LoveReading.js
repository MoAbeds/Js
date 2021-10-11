import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainLoved from "../Components/LovedReading/MainLoved";
import { Container, Header, Content, List, ListItem, Body } from "native-base";
export default class LoveReading extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container>
        <MainLoved />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};
