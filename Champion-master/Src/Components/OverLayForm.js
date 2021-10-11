import React, { Component } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { Overlay as _styles } from "../Styles";
export default class OverLayForm extends Component {
  static propTypes = {
    prop: PropTypes,
    IsOpen: PropTypes.bool.isRequired,
    OnOverLayPressed: PropTypes.func.isRequired
  };

  render() {
    let { IsOpen, FormSty, Style, OnOverLayPressed } = this.props;
    return (
      <View style={[_styles.Container, Style]}>
        {IsOpen ? (
          <View style={_styles.Container}>
            <TouchableWithoutFeedback onPress={OnOverLayPressed}>
              <View style={_styles.overlay} />
            </TouchableWithoutFeedback>
            <View style={[_styles.FormSty, FormSty]}>
              {this.props.children}
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}
