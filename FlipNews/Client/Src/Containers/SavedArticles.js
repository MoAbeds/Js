import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SavedMainComp from "../Components/Saved/SavedMainComp";

export class SavedArticles extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View style={_styles.container}>
        <StatusBar backgroundColor="#293551" />
        <SavedMainComp />
      </View>
    );
  }
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedArticles);
