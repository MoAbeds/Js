import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { _styles } from "../../Styles/Home/ScrollButtons";
import { FetchNews } from "../../Redux/Action/MainActions";

export class ScrollButtons extends Component {
  state = {
    Arr: [
      { value: "All", id: 0, isSelect: true, SelectedSty: "black" },
      { value: "business", id: 1, isSelect: false, SelectedSty: "#293551" },
      {
        value: "entertainment",
        id: 2,
        isSelect: false,
        SelectedSty: "#293551"
      },
      { value: "Sports", id: 3, isSelect: false, SelectedSty: "#293551" },
      { value: "health", id: 4, isSelect: false, SelectedSty: "#293551" }
    ]
  };
  static propTypes = {
    prop: PropTypes,
    FetchNews: PropTypes.func.isRequired
  };

  //Select item on Flatlist

  selectItem = async item => {
    const NewArr = this.state.Arr.map(item => {
      item.isSelect = false;
      item.SelectedSty = "#293551";
      return item;
    });
    this.setState({ Arr: NewArr });
    item.isSelect = !item.isSelect;
    item.SelectedSty = item.isSelect ? "black" : "#293551";

    const index = this.state.Arr.findIndex(item => {
      item.id == item.id;
    });
    this.state.Arr[index] = item;

    this.setState({
      Arr: this.state.Arr
    });
  };

  _renderItem({ item, index }) {
    let { FetchNews } = this.props;

    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            FetchNews(item.value), this.selectItem(item);
          }}
        >
          <View
            style={[_styles.ListItem, { backgroundColor: item.SelectedSty }]}
            key={item.id}
          >
            <Text style={_styles.ListItemText}>{item.value}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={this.state.Arr}
          renderItem={item => this._renderItem(item)}
          keyExtractor={item => item.id.toString()}
          extraData={this.state}
          ListFooterComponent={<View style={{ width: 15 }}></View>}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { FetchNews }
)(ScrollButtons);
