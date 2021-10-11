import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  TabHeading
} from "native-base";

// Transaltion Function
import { t, ChangeLanguage } from "../../../Locales/index";
import ARTabs from "./ARTabs";
import ENTabs from "./ENTabs";
export class HeaderTabs extends Component {
  static propTypes = {
    prop: PropTypes,
    IsEngInUse: PropTypes.bool.isRequired
  };

  render() {
    let { IsEngInUse } = this.props;
    return <Container>{IsEngInUse ? <ENTabs /> : <ARTabs />}</Container>;
  }
}

const _styles = StyleSheet.create({
  TabsContainerSty: {
    elevation: 0,
    backgroundColor: "white",
    marginTop: 20,
    fontSize: 25
  },

  TabSty: {
    backgroundColor: "white",
    elevation: 0,
    fontSize: 25,
    color: "gray"
  },
  TabText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  ActTabSty: {
    borderBottomWidth: 2,
    borderBottomColor: "#E3170A",
    backgroundColor: "red",
    color: "black"
  }
});

const mapStateToProps = state => ({
  IsEngInUse: state.Flip.IsEngInUse
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderTabs);
