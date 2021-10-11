import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Carousel from "react-native-snap-carousel";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";
import { SendWebLink } from "../../Redux/Action/MainActions";
import { Actions } from "react-native-router-flux";

export class CarouselCards extends Component {
  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
  }
  static propTypes = {
    prop: PropTypes
  };

  _renderItem({ item }) {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.SendWebLink(item.url), Actions.WebView();
        }}
      >
        <View style={_Style.SliderCont}>
          <ImageBackground
            source={{ uri: item.urlToImage }}
            style={_Style.SlideBG}
          >
            <View style={_Style.OverLay} />
            <Text style={_Style.SlideTitle}>
              {item.title.length < 20
                ? `${item.title}`
                : `${item.title.substring(0, 30)}...`}
            </Text>
          </ImageBackground>
          {/** OverLay */}

          <View style={_Style.iconCont}>
            <View style={_Style.LeftSlideIconCont}>
              <FontAwesome color="white" size={25} name="bookmark" />
              <Entypo
                style={{ marginLeft: 20 }}
                color="white"
                size={25}
                name="share"
              />
            </View>

            <View style={_Style.RightSlideIconCont}>
              <AntDesign name="clockcircleo" color="white" size={25} />
              <Text style={_Style.LiveText}>LIVE</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    let { MainNews } = this.props;
    return (
      <Carousel
        data={MainNews}
        renderItem={this._renderItem}
        hasParallaxImages={true}
        itemWidth={Dimensions.get("window").width * 0.75}
        sliderWidth={Dimensions.get("window").width}
        containerCustomStyle={{ flex: 1 }}
        slideStyle={_Style.CarouselSlideStyle}
      />
    );
  }
}

const _Style = StyleSheet.create({
  SliderStyCont: {
    borderRadius: 15,
    width: "95%",
    height: "80%"
  },
  OverLay: {
    position: "absolute",
    alignSelf: "center",
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: "black",
    width: "100%",
    height: "93%",
    borderRadius: 10
  },
  SliderCont: {
    height: 290,
    width: 300,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20
  },
  SlideBG: {
    width: "100%",
    height: "85%",
    borderRadius: 10
  },
  SlideTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 70
  },
  iconCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    height: "15%",
    borderRadius: 10,

    marginTop: -40
  },
  LeftSlideIconCont: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: "row"
  },
  RightSlideIconCont: {
    flexDirection: "row",
    marginRight: 30,
    marginTop: 10
  },
  LiveText: {
    color: "white",
    fontWeight: "100",
    marginLeft: 15,
    fontSize: 15,
    opacity: 0.8
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { SendWebLink })(CarouselCards);
