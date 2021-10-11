import React, { Component } from "react";
import { connect } from "react-redux";

import { Container } from "native-base";
import MainHomeComponents from "../Components/Home";
import { ToggleOverLay } from "../Redux/Action/MainActions";
import OverLayCompoenents from "../Components/Home/OverLayCompoenents";
export class MainHome extends Component {
  render() {
    return (
      <Container>
        <MainHomeComponents />
        <OverLayCompoenents />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { ToggleOverLay }
)(MainHome);
