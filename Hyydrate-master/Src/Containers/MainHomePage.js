import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "native-base";
import OverLayMenu from "../Components/Home/OverLayMenu";
import WellDoneOverLay from "../Components/Home/WellDoneOverLay";
import ProgressWater from "../Components/Home/ProgressWater";
import WaterDrinkedInfo from "../Components/Home/WaterDrinkedInfo";
import RR from "../../assets/RR.png";
export class MainHomePage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <ScrollView>
        <View style={_styles.ContainerSty}>
          <ProgressWater />
          <WaterDrinkedInfo />
        </View>
      </ScrollView>
    );
  }
}

const _styles = StyleSheet.create({
  ContainerSty: {
    height: "100%"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHomePage);
