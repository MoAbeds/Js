import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ProfileMain from "../Components/Profile/ProfileMain";
export class ProfileView extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <ProfileMain />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileView);
