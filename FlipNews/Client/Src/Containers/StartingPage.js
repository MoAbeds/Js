import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import StartingMain from "../Components/Starting/StartingMain";
export class StartingPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <StartingMain />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartingPage);
