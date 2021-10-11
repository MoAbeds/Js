import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import W1 from "../../../assets/images/W1.svg";
import W2 from "../../../assets/images/W2.svg";
import W3 from "../../../assets/images/W3.svg";
import W4 from "../../../assets/images/W4.svg";
import W5 from "../../../assets/images/W5.svg";
import Custom from "../../../assets/images/Custom.svg";
export class WaterDrinkedInfo extends Component {
  static propTypes = {
    prop: PropTypes
  };

  RenderDrinkedWater() {
    let { DrinkedValues } = this.props;
    if (DrinkedValues) {
      return (
        <View>
          {DrinkedValues.map(value => (
            <View>
              <Entypo
                style={{
                  position: "absolute",
                  marginTop: 10,
                  marginLeft: 25,
                  paddingBottom: 10
                }}
                size={15}
                name="dots-three-vertical"
              />

              <View style={_styles.DrinkedCont}>
                {this.ToggleImageWaterSize(value)}
                <Text style={_styles.ReminderText}>8:00 AM</Text>
              </View>
            </View>
          ))}
        </View>
      );
    } else {
      alert("hi");
    }
  }

  ToggleImageWaterSize(toggle) {
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

  render() {
    return (
      <View style={_styles.FormSty}>
        <View style={_styles.ReminderCont}>
          <AntDesign name="clockcircleo" size={25} />
          <Text style={_styles.ReminderText}>8:00 AM</Text>
        </View>
        {this.RenderDrinkedWater()}
      </View>
    );
  }
}

const _styles = StyleSheet.create({
  FormSty: {
    width: 300,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    paddingBottom: 20,
    paddingTop: 10,
    marginTop: 15
  },
  ReminderCont: {
    flexDirection: "row",
    paddingTop: 10,
    marginLeft: 20
  },
  ReminderText: {
    textAlign: "center",
    alignSelf: "center",
    marginLeft: 80
  },
  DrinkedCont: {
    flexDirection: "row",
    paddingTop: 10,
    marginLeft: 20,
    marginTop: 25
  }
});

const mapStateToProps = state => ({
  DrinkedValues: state.Hyydrate.DrinkedValues
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterDrinkedInfo);
