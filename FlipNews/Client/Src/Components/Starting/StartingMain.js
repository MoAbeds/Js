import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Background from "../../../assets/Background.png";
import Logo from "../../../assets/Logo.png";
import { t, ChangeLanguage } from "../../Locales/index";
import { Actions } from "react-native-router-flux";

export class StartingMain extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View style={_styles.Container}>
        <Image style={_styles.Image} source={Logo} />
        <View style={_styles.TextView}>
          <Text style={_styles.MainText}>{t("MainHeader")}</Text>
          <Text style={_styles.OtherText}>{t("SecHeader")}</Text>
        </View>

        <TouchableWithoutFeedback onPress={() => Actions.ChooseTobic()}>
          <View style={_styles.BtnContainer}>
            <Text style={_styles.BtnText}>{t("MainBtnText")}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const _styles = StyleSheet.create({
  ImageBG: {
    height: "100%",
    width: "100%"
  },
  Container: {
    alignItems: "center",
    marginTop: 100
  },
  Image: {
    height: 250,
    width: 150
  },
  TextView: {
    alignItems: "center"
  },
  MainText: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 25,
    color: "#293551"
  },
  OtherText: {
    color: "#293551"
  },
  BtnContainer: {
    backgroundColor: "#293551",
    width: 250,
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 70
  },
  BtnText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 10,
    color: "white"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartingMain);
