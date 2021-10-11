import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  ToggleCupsMenu,
  DrinkWater,
  ToggleSUCCMenu
} from "../../Redux/Action/Hyydrate_Actions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import W1 from "../../../assets/images/W1.svg";
import W2 from "../../../assets/images/W2.svg";
import W3 from "../../../assets/images/W3.svg";
import W4 from "../../../assets/images/W4.svg";
import W5 from "../../../assets/images/W5.svg";
import Custom from "../../../assets/images/Custom.svg";

export class Btns_water extends Component {
  static propTypes = {
    prop: PropTypes
  };

  ToggleImageWaterSize() {
    let toggle = this.props.ChosenCup;

    switch (toggle) {
      case 100:
        return <W1 height={25} width={25} />;

      case 200:
        return <W2 height={25} width={25} />;

      case 300:
        return <W3 height={25} width={25} />;
      case 400:
        return <W4 height={25} width={25} />;
      case 500:
        return <W5 height={25} width={25} />;

      default:
        return null;
    }
  }

  ToggleImageWaterSizeB() {
    let toggle = this.props.ChosenCup;

    switch (toggle) {
      case 100:
        return (
          <View style={{ alignSelf: "center" }}>
            <W1 height={35} width={35} />
          </View>
        );

      case 200:
        return (
          <View style={{ alignSelf: "center" }}>
            <W2 height={35} width={35} />
          </View>
        );
      case 300:
        return (
          <View style={{ alignSelf: "center" }}>
            <W3 height={36} width={35} />
          </View>
        );
      case 400:
        return (
          <View style={{ alignSelf: "center" }}>
            <W4 height={35} width={35} />
          </View>
        );
      case 500:
        return (
          <View style={{ alignSelf: "center" }}>
            <W5 height={35} width={35} />
          </View>
        );
      default:
        return null;
    }
  }

  render() {
    let {
      ToggleCupsMenu,
      ChosenCup,
      WaterValue,
      DrinkedWater,
      DrinkWater,
      ToggleSUCCMenu
    } = this.props;
    return (
      <View>
        <View style={{ marginLeft: 280, marginTop: -25 }}>
          <TouchableWithoutFeedback onPress={() => ToggleCupsMenu()}>
            <View style={_styles.CircleChangeBtn}>
              {this.ToggleImageWaterSize()}
              <FontAwesome5
                style={{ marginTop: 0, alignSelf: "center" }}
                name="sync-alt"
                size={10}
                color="black"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
        >
          <Text style={_styles.DrinkedText}>{DrinkedWater}</Text>
          <Text style={_styles.RecommendedWaterText}>/{WaterValue}</Text>
          <Text style={_styles.WaterValue}>ml</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={_styles.MoreTextSty}>Daily Drink Target</Text>
        </View>
        <View style={{ marginTop: 20, alignSelf: "center" }}>
          <TouchableWithoutFeedback
            onPress={() => {
              DrinkWater(ChosenCup), ToggleSUCCMenu();
            }}
          >
            <View style={_styles.CircleMainBtn}>
              {this.ToggleImageWaterSizeB()}
              <Text style={_styles.TextBtnSty}>{ChosenCup} ml </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
const _styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "red"
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
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
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
    color: "gray",
    fontSize: 10
  },

  CircleChangeBtn: {
    borderRadius: 30 / 2,
    height: 30,
    width: 30,

    backgroundColor: "white",
    marginTop: 10,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
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

export default connect(
  mapStateToProps,
  { ToggleCupsMenu, DrinkWater, ToggleSUCCMenu }
)(Btns_water);
