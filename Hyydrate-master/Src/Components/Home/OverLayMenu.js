import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  ScrollView,
  ListView,
  FlatList
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Form, Content } from "native-base";
import {
  ToggleCupsMenu,
  ToggleCustomMenu,
  ChooseCup
} from "../../Redux/Action/Hyydrate_Actions";
import W1 from "../../../assets/images/W1.svg";
import W2 from "../../../assets/images/W2.svg";
import W3 from "../../../assets/images/W3.svg";
import W4 from "../../../assets/images/W4.svg";
import W5 from "../../../assets/images/W5.svg";
import Custom from "../../../assets/images/Custom.svg";

import CustomizeOverlayMenu from "./CustomizeOverlayMenu";
import OverLayForm from "../Main/OverLayForm";
import WaterBottle from "./WaterBottle";

export class OverLayMenu extends Component {
  state = {
    Value: 100
  };
  static propTypes = {
    prop: PropTypes,
    ShowOverLayCups: PropTypes.bool.isRequired,
    ToggleCupsMenu: PropTypes.func.isRequired,
    ChooseCup: PropTypes.func.isRequired,
    ShowCustomMenu: PropTypes.bool.isRequired,
    ToggleCustomMenu: PropTypes.bool.isRequired
  };

  ValueChange(value) {
    this.setState({ Value: value });
    alert(this.state.Value);
  }

  OnOkPressed() {
    let { ChooseCup, ToggleCupsMenu } = this.props;
    let { Value } = this.state;
    ChooseCup(Value);
    ToggleCupsMenu();
  }

  RenderCustomCups() {
    let { CustomCups } = this.props;
    if (CustomCups) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {CustomCups.map(cup => (
            <View style={{ width: 70, marginTop: 10 }}>
              <TouchableWithoutFeedback onPress={() => this.ValueChange(cup)}>
                <View>
                  <Image source={custom} style={_styles.ImageCustomSty} />
                  <Text style={{ fontFamily: "Roboto" }}>{cup}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
      );
    } else {
      alert("out");
    }
  }

  renderItem({ item }) {
    return (
      <View>
        <Text>{item.Value}</Text>
      </View>
    );
  }

  render() {
    let {
      ShowOverLayCups,
      ToggleCupsMenu,
      ShowCustomMenu,
      ToggleCustomMenu
    } = this.props;
    return (
      <OverLayForm
        FormSty={{ marginTop: 260, height: 130 }}
        Style={{ height: "100%" }}
        IsOpen={ShowOverLayCups}
        OnOverLayPressed={() => ToggleCupsMenu()}
      >
        <ScrollView
          automaticallyAdjustContentInsets={false}
          style={{ marginTop: 10 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <WaterBottle
            FontCont={{ marginLeft: 10 }}
            Style={{ marginLeft: 25 }}
            Size={100}
            OnPressed={() => this.ValueChange(100)}
          >
            <W1 height={50} width={50} />
          </WaterBottle>

          <WaterBottle
            FontCont={{ marginLeft: 10 }}
            Style={{ marginLeft: -25 }}
            Size={200}
            OnPressed={() => this.ValueChange(200)}
          >
            <W2 height={50} width={50} />
          </WaterBottle>

          <WaterBottle
            FontCont={{ marginLeft: 15 }}
            Style={{ marginLeft: -25 }}
            Size={300}
            OnPressed={() => this.ValueChange(300)}
          >
            <W3 height={50} width={50} />
          </WaterBottle>

          <WaterBottle
            FontCont={{ marginLeft: 15 }}
            Style={{ marginLeft: -30 }}
            Size={400}
            OnPressed={() => this.ValueChange(400)}
          >
            <W4 height={50} width={50} />
          </WaterBottle>

          <WaterBottle
            FontCont={{ marginLeft: 15 }}
            Style={{ marginLeft: -25 }}
            Size={500}
            OnPressed={() => this.ValueChange(500)}
          >
            <W5 height={50} width={50} />
          </WaterBottle>

          <WaterBottle
            FontCont={{ marginLeft: 5 }}
            Style={{ marginLeft: -25 }}
            Size={"Custom"}
            OnPressed={() => alert("hello")}
          >
            <Custom height={50} width={50} />
          </WaterBottle>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginLeft: 150,
              marginTop: 10
            }}
          >
            <View>
              <TouchableWithoutFeedback onPress={() => ToggleCupsMenu()}>
                <Text>Cancel</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ marginLeft: 30 }}>
              <TouchableWithoutFeedback onPress={() => this.OnOkPressed()}>
                <Text style={{ color: "#00B4DB" }}>OK</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </OverLayForm>
    );
  }
}

const _styles = StyleSheet.create({
  Container: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    height: "100%",
    flex: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: "black",
    width: "100%"
  },
  FormSty: {
    width: 300,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    paddingBottom: 10
  },
  FormTitle: {
    fontFamily: "Roboto",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10
  },
  ItemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
    marginLeft: 30,
    width: 230,
    justifyContent: "space-between"
  },
  ImageSty: {
    width: 50,
    height: 20
  },
  ImageW1Sty: {
    width: 35,
    height: 35
  },
  ImageW2Sty: {
    width: 40,
    height: 40
  },
  ImageW3Sty: {
    width: 40,
    height: 55,
    marginTop: -15
  },
  ImageW4Sty: {
    width: 50,
    height: 85
  },

  ImageW5Sty: {
    width: 25,
    height: 85,
    marginLeft: 10
  },

  ImageCustomSty: {
    width: 50,
    height: 85
  }
});

const mapStateToProps = state => ({
  ShowOverLayCups: state.Hyydrate.ShowOverLayCups,
  ShowCustomMenu: state.Hyydrate.ShowCustomMenu,
  CustomCups: state.Hyydrate.CustomCups
});

export default connect(
  mapStateToProps,
  { ToggleCupsMenu, ToggleCustomMenu, ChooseCup }
)(OverLayMenu);
