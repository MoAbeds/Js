import React, { Component } from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Body,
  Right,
  Title,
  Button,
  H1
} from "native-base";

import { Actions } from "react-native-router-flux";

import { t, ChangeLanguage } from "../../Locales/index";
import Background from "../../../assets/Background.png";
import Logo from "../../../assets/Logo.png";
import { AntDesign } from "@expo/vector-icons";

let ArbArr = [
  { value: "الجميع", Selected: false, id: 0, Color: "black" },
  { value: "المال", Selected: false, id: 1, Color: "#206B28" },
  { value: "ترفيه", Selected: false, id: 2, Color: "#1E24AE" },
  { value: "الرياضه", Selected: false, id: 3, Color: "#293551" },
  { value: "السياسه", Selected: false, id: 4, Color: "#ED311E" }
];

let EngArr = [
  { value: "All", Selected: false, id: 0, Color: "black" },
  { value: "Money", Selected: false, id: 1, Color: "#206B28" },
  { value: "Entertainment", Selected: false, id: 2, Color: "#1E24AE" },
  { value: "Sports", Selected: false, id: 3, Color: "#293551" },
  { value: "Politics", Selected: false, id: 4, Color: "#ED311E" }
];

export class MainLoved extends Component {
  state = {
    buttonColor: "#979797",
    selectedItems: []
  };
  static propTypes = {
    prop: PropTypes,
    IsEngInUse: PropTypes.bool.isRequired
  };

  onItemPressed(item) {
    item.Selected = !item.Selected;
    console.log(item);
  }

  _RenderListItems() {
    let { IsEngInUse } = this.props;
    if (IsEngInUse) {
      let arr = EngArr;
      return arr.map(item => (
        <ListItem
          key={item.id}
          selected={item.Selected ? true : false}
          style={[_styles.ListItem, { backgroundColor: item.Color }]}
          onPress={() => this.onItemPressed(item)}
        >
          <Text style={_styles.ListItemText}>{item.value}</Text>
        </ListItem>
      ));
    } else {
      let arr = ArbArr;
      return arr.map(item => (
        <ListItem style={_styles.ListItem}>
          <Text style={_styles.ListItemText}>{item.value}</Text>
        </ListItem>
      ));
    }
  }

  render() {
    return (
      <ImageBackground source={Background} style={_styles.ImageBG}>
        <Button onPress={() => Actions.auth()} style={_styles.BtbCon}>
          <Text style={_styles.BtnText}>{t("LoveReadingBtn")}</Text>
        </Button>

        <Content style={_styles.Content}>
          <H1 style={_styles.H1}>{t("LoveReadingHeader")}</H1>
          <List style={_styles.List}>{this._RenderListItems()}</List>
        </Content>
        <Button style={_styles.TopicsBtn}>
          <Text style={_styles.TopicBtnText}>Follow 5 or more Topics</Text>
        </Button>
      </ImageBackground>
    );
  }
}

const _styles = StyleSheet.create({
  ImageBG: {
    height: "100%",
    width: "100%"
  },
  Container: {
    backgroundColor: "white",
    marginTop: 25
  },
  HeaderText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginLeft: 10,
    color: "#293551"
  },
  Body: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5
  },
  Image: {
    height: 45,
    width: 25,
    paddingRight: 10
  },
  BtbCon: {
    borderWidth: 2,
    borderColor: "#293551",
    borderRadius: 10,
    height: 40,
    width: 100,
    backgroundColor: "white",
    marginLeft: 290,
    marginTop: 20
  },
  BtnText: {
    width: 100,
    textAlign: "center",
    color: "#293551",
    fontWeight: "bold"
  },
  Content: {
    marginTop: 20
  },
  H1: {
    marginLeft: 15,
    fontWeight: "bold",
    color: "white"
  },
  List: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 10,
    alignSelf: "center"
  },
  ListItem: {
    // backgroundColor: "#D3E1D9",
    borderRadius: 10,
    marginTop: 12,
    alignItems: "center",
    alignSelf: "center",
    width: 190,
    height: 70
  },
  ListItemText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "white",
    alignSelf: "center",
    width: 190
  },
  TopicsBtn: {
    width: "95%",
    alignSelf: "center",
    marginBottom: 20,
    textAlign: "center",
    height: 60,
    backgroundColor: "#404441",
    alignItems: "center"
  },
  TopicBtnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginLeft: 105
  },
  IconNew: {
    marginLeft: 1
  }
});

const mapStateToProps = state => ({
  IsEngInUse: state.Flip.IsEngInUse
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLoved);
