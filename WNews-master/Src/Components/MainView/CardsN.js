import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Image
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";
import { SendWebLink } from "../../Redux/Action/MainActions";
import { Actions } from "react-native-router-flux";

export class CardsN extends Component {
  componentDidMount() {
    this.MapData();
  }

  static propTypes = {
    prop: PropTypes
  };
  state = {
    dataSource: null
  };

  renderItem(data) {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.SendWebLink(data.item.url), Actions.WebView();
        }}
      >
        <View style={_Style.CardCont}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{ uri: data.item.urlToImage }}
              style={_Style.Image}
            />
            <Text
              style={_Style.CardText}
              ellipsizeMode="tail"
              numberOfLines={4}
            >
              {data.item.title.length < 20
                ? `${data.item.title}`
                : `${data.item.title.substring(0, 60)}...`}
            </Text>
          </View>

          <View style={_Style.CardIconText}>
            <FontAwesome color="gray" size={25} name="bookmark" />
            <Entypo
              style={{ marginLeft: 20 }}
              color="gray"
              size={25}
              name="share"
            />
          </View>

          <View style={_Style.CardSmallText}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={4}
              style={{ color: "gray" }}
            >
              {data.item.source.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  MapData() {
    let NewArr = this.props.NextNews.map(item => {
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

  render() {
    return (
      <View style={{ width: "100%", height: "66%" }}>
        <Text style={_Style.TopText}> Top Articles </Text>
        <FlatList
          scrollEnabled
          data={this.state.dataSource}
          //  ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          extraData={this.state}
          ListFooterComponent={<View style={{ width: 15 }}></View>}
          contentContainerStyle={{ paddingBottom: 250 }}
        />
      </View>
    );
  }
}

const _Style = StyleSheet.create({
  TopText: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
    marginTop: 6
  },
  Image: {
    borderRadius: 10,
    width: 120,
    height: 110,
    marginTop: 20,
    marginLeft: 10
  },
  CardIconText: {
    flexDirection: "row",
    marginLeft: 140,
    marginTop: -37
  },
  CardText: {
    width: "60%",
    marginLeft: 10,
    marginTop: 25,
    fontSize: 16,
    fontWeight: "bold"
  },
  CardSmallText: {
    flexDirection: "row",
    marginLeft: 250,
    width: 100,
    marginTop: -10
  },
  CardCont: {
    width: "90%",
    height: 150,
    backgroundColor: "rgba(0,0,0,0.2)",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10
  },
  selectedList: {
    backgroundColor: "#57D2F5"
  },
  ListCont: {
    width: "90%",
    height: 100,
    backgroundColor: "#717171",
    alignSelf: "center",
    marginTop: 25,
    paddingBottom: 10,
    borderRadius: 10
  }
});

const mapStateToProps = state => ({
  NextNews: state.WNews.NextNews
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { SendWebLink })(CardsN);
