import React, { Component } from "react";
import {
  Animated,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import CircleFillable from "./CircleFillable";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { Container } from "native-base";
import Btns_water from "./Btns_water";

export class ProgressWater extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    let {
      ToggleCupsMenu,
      ChosenCup,
      WaterValue,
      DrinkedWater,
      DrinkWater,
      ToggleSUCCMenu
    } = this.props;
    let fillAsNumber = Math.min((DrinkedWater / WaterValue) * 100, 100);
    if (Number.isNaN(fillAsNumber)) fillAsNumber = 0;

    return (
      <View style={_styles.container}>
        <CircleFillable fill={fillAsNumber} />
        <Btns_water />
      </View>
    );
  }
}

const _styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20
  },

  DrinkedText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    color: "#00B4DB"
  },
  RecommendedWaterText: {
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  WaterValue: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 5
  },
  MoreTextSty: {
    color: "#999",
    marginRight: 10,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 10
  },
  CircleMainBtn: {
    borderRadius: 60 / 2,
    height: 60,
    width: 60,
    backgroundColor: "#00B4DB"
  },
  ImaegeSty: {
    height: 20,
    width: 20,
    alignSelf: "center",
    marginTop: 15
  },
  TextBtnSty: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    color: "white"
  },

  CircleChangeBtn: {
    borderRadius: 30 / 2,
    height: 30,
    width: 30,
    backgroundColor: "#00B4DB",
    marginTop: 10
  },
  ImaegeChangeSty: {
    height: 15,
    width: 15,
    alignSelf: "center",
    marginTop: 5
  }
});

const mapStateToProps = state => ({
  ChosenCup: state.Hyydrate.ChosenCup,
  WaterValue: state.Hyydrate.WaterValue,
  DrinkedWater: state.Hyydrate.DrinkedWater
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(ProgressWater);
