import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RemindingSettings from "../Components/Setting/RemindingSettings";
export class SettingsView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View>
        <RemindingSettings />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsView);
