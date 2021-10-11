import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class WaterBottle extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    let { ImageUri, Size, Style, FontCont, OnPressed } = this.props;
    return (
      <View style={[_styles.ContainerSty, Style]}>
        <View style={{ flex: 2 }}>
          <TouchableWithoutFeedback onPress={OnPressed}>
            {this.props.children}
          </TouchableWithoutFeedback>
        </View>

        <View style={[_styles.TextContainer, FontCont]}>
          <Text>{Size}</Text>
        </View>
      </View>
    );
  }
}

const _styles = StyleSheet.create({
  ContainerSty: {
    height: 130,
    width: 130
  },
  ImageSty: {
    width: 100,
    height: 100,
    resizeMode: "cover"
  },
  TextContainer: {
    flex: 1,
    marginTop: -80,
    width: 70
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaterBottle);
