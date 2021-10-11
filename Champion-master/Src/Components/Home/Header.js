import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  StyleSheet
} from "react-native";
import { Container, Button, Right } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";

import { MainHomeHeader as _Style } from "../../Styles";
import Shape1 from "../../../assets/Shape1.png";
import { ToggleOverLay } from "../../Redux/Action/MainActions";
const { height, width } = Dimensions.get("window");
export class Header extends Component {
  static propTypes = {
    ToggleOverLay: PropTypes.func.isRequired
  };

  render() {
    let { ToggleOverLay } = this.props;
    return (
      <ImageBackground source={Shape1} style={{ height: 300, width: width }}>
        <View style={_Style.Container}>
          <Text style={_Style.NameText}>Hi John</Text>
          <Text style={_Style.Desc}>
            I arrange the tasks you have to do by {"\n"} importance and
            regularity
          </Text>
          <Button onPress={() => ToggleOverLay()} style={_Style.BtnContainer}>
            <AntDesign
              style={_Style.BtnIcon}
              name="plus"
              size={30}
              color="#AA154E"
            />
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { ToggleOverLay }
)(Header);
