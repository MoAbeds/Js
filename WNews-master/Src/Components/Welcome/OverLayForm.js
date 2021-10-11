import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { OverLay_Sty as _styles } from "../../Styles/Welcome";

export class OverLayForm extends Component {
  static propTypes = {
    prop: PropTypes
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverLayForm);
