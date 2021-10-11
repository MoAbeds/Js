import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "native-base";

import BG from "../../../assets/Catg/BG.jpg";
import { Actions } from "react-native-router-flux";

export class index extends Component {
  componentDidMount() {
    this.MapData();
  }
  state = {
    dataSource: []
  };
  static propTypes = {
    prop: PropTypes
  };

  MapData() {
    let Arr = [
      { value: "International", Selected: false, id: 0, Color: "black" },
      { value: "My Country", Selected: false, id: 1, Color: "#206B28" },
      { value: "Money", Selected: false, id: 2, Color: "#206B28" },
      { value: "Entertainment", Selected: false, id: 5, Color: "#1E24AE" },
      { value: "Sports", Selected: false, id: 3, Color: "#293551" },
      { value: "Politics", Selected: false, id: 4, Color: "#ED311E" },
      { value: "Technology", Selected: false, id: 7, Color: "#ED311E" },
      { value: "Health", Selected: false, id: 6, Color: "#ED311E" }
    ];
    let NewArr = Arr.map(item => {
      item.isSelect = false;
      item.selectedClass = _Style.ListCont;
      return item;
    });
    this.setState({
      dataSource: NewArr
    });
  }

  selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? _Style.selectedList
      : _Style.ListCont;

    const index = this.state.dataSource.findIndex(
      item => data.item.id === item.id
    );

    this.state.dataSource[index] = data.item;

    this.setState({
      dataSource: this.state.dataSource
    });
  };

  renderItem(data) {
    return (
      <TouchableHighlight
        onPress={() => this.selectItem(data)}
        style={[_Style.ListCont, data.item.selectedClass]}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={_Style.ListText}>{data.item.value}</Text>
          {/**
          <AntDesign
            name="check"
            size={60}
            color="rgba(0,0,0,0.2)"
            style={{ marginLeft: 100, marginTop: 20 }}
          /> */}
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={BG}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={_Style.HeaderCont}>
          <Text style={_Style.HeaderTitle}>Choose Your interseting Topics</Text>
          <Text style={_Style.HeaderSubTitle}>
            You can channge it later also{" "}
          </Text>
          <Button transparent onPress={() => Actions.main()}>
            <AntDesign
              name="arrowright"
              size={50}
              color="black"
              style={{ marginLeft: 350, marginTop: -30 }}
            />
          </Button>
        </View>

        <View style={{ width: "100%", height: "100%" }}>
          <FlatList
            scrollEnabled
            data={this.state.dataSource}
            //  ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={item => this.renderItem(item)}
            keyExtractor={item => item.id.toString()}
            extraData={this.state}
            ListFooterComponent={<View style={{ width: 15 }}></View>}
            contentContainerStyle={{ paddingBottom: 120 }}
          />
        </View>
      </ImageBackground>
    );
  }
}

const _Style = StyleSheet.create({
  HeaderCont: {
    width: "100%",
    height: "15%",
    backgroundColor: "#57D2F5",
    justifyContent: "center"
  },
  HeaderTitle: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 20
  },
  HeaderSubTitle: {
    color: "gray",
    textAlign: "center",
    marginTop: 15
  },
  ListCont: {
    width: "90%",
    height: 100,
    backgroundColor: "rgba(0,0,0,0.2)",

    alignSelf: "center",
    marginTop: 25,
    paddingBottom: 10,
    borderRadius: 10
  },
  ListText: {
    color: "black",
    fontSize: 20,
    marginTop: 30,
    marginLeft: 30,
    width: "40%"
  },
  selectedList: {
    backgroundColor: "#57D2F5"
  },
  Btn: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginTop: 740,
    borderRadius: 55,
    width: 100,
    height: 100,
    marginLeft: 270,
    justifyContent: "center",
    backgroundColor: "#57D2F5"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
