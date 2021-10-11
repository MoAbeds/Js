import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Form, Content, Input } from "native-base";
import Custom from "../../../assets/images/Custom.svg";
import {
  ToggleCustomMenu,
  CreateCustomCup
} from "../../Redux/Action/Hyydrate_Actions";
import OverLayForm from "../Main/OverLayForm";

export class CustomizeOverlayMenu extends Component {
  state = {
    Value: null
  };
  static propTypes = {
    prop: PropTypes
  };

  render() {
    let { ToggleCustomMenu, CreateCustomCup, ShowCustomMenu } = this.props;
    let { Value } = this.state;
    return (
      <OverLayForm
        FormSty={{ marginTop: 260, height: 160 }}
        Style={{ height: "100%" }}
        IsOpen={ShowCustomMenu}
      >
        <Text style={_styles.FormTitle}>Customize your drinking cup</Text>
        <View style={_styles.ItemsCont}>
          <Custom height={50} width={50} />
          <View style={_styles.InputCont}>
            <Input
              value={this.state.Value}
              onChangeText={e => this.setState({ Value: e })}
              keyboardType="number-pad"
              style={_styles.InputSty}
            />
            <Text style={_styles.TextSty}> ml</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 175 }}>
          <View>
            <TouchableWithoutFeedback onPress={() => ToggleCustomMenu()}>
              <Text>Cancel</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={{ marginLeft: 30 }}>
            <TouchableWithoutFeedback
              onPress={() => {
                CreateCustomCup(Value), ToggleCustomMenu();
              }}
            >
              <Text style={{ color: "#00B4DB" }}>OK</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </OverLayForm>
    );
  }
}

const _styles = StyleSheet.create({
  FormTitle: {
    fontFamily: "Roboto",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10
  },
  ItemsCont: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 30
  },
  ImageCustomSty: {
    width: 60,
    height: 80
  },
  InputCont: {
    width: 80,
    marginBottom: 20,
    marginLeft: 20,
    flexDirection: "row"
  },
  InputSty: {
    borderBottomColor: "#00B4DB",
    borderBottomWidth: 3
  },
  TextSty: {
    marginTop: 30,
    marginLeft: 10
  }
});

const mapStateToProps = state => ({
  ShowCustomMenu: state.Hyydrate.ShowCustomMenu
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { ToggleCustomMenu, CreateCustomCup }
)(CustomizeOverlayMenu);
