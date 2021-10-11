import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  FlatList
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "native-base";

import BG from "../../../assets/iside/BG.jpg";
import { fETCH_All_News } from "../../Redux/Action/MainActions";
import CarouselCards from "./CarouselCards";
import CardsN from "./CardsN";
export class index extends Component {
  componentDidMount() {
    // this.props.fETCH_All_News();
  }
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { NextNews } = this.props;
    return (
      <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
        <View style={_Style.HeaderCont}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "95%",
              alignSelf: "center"
            }}
          >
            <Button transparent style={_Style.Btn}>
              <Text style={_Style.HeaderTitle}>Whats New</Text>
            </Button>

            <Button transparent style={_Style.Btn}>
              <Text style={_Style.HeaderTitle}>#Topics</Text>
            </Button>

            <Button transparent style={_Style.Btn}>
              <Text style={_Style.HeaderTitle}>Bookmarked</Text>
            </Button>
          </View>
        </View>

        <View style={{ height: "100%", width: "100%" }}>
          <CarouselCards MainNews={NextNews} />
          <CardsN />
        </View>
      </ImageBackground>
    );
  }
}

const _Style = StyleSheet.create({
  HeaderCont: {
    width: "100%",
    height: "10%",
    backgroundColor: "#57D2F5"
  },
  HeaderTitle: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 40
  },
  HeaderSubTitle: {
    color: "gray",
    textAlign: "center",
    marginTop: 15
  },
  Btn: {
    marginTop: 0
  }
});

const mapStateToProps = state => ({
  NextNews: state.WNews.NextNews
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { fETCH_All_News }
)(index);
