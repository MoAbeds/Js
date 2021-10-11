import React, { Component } from "react";
import { View, Text, TouchableHighlight, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Country from "./Country.json";
import OverLayForm from "./OverLayForm";
import { ChooseCountry, ShowOverLay } from "../../Redux/Action/MainActions";
export class DropDown extends Component {
  static propTypes = {
    prop: PropTypes,
    ChooseCountry: PropTypes.func.isRequired,
    OverLay: PropTypes.bool.isRequired
  };

  renderItem(data) {
    const { ChooseCountry, ShowOverLay } = this.props;
    return (
      <TouchableHighlight
        onPress={() => {
          ChooseCountry(data.item.name);
          ShowOverLay();
        }}
      >
        <View style={{ borderRadius: 10, marginTop: 20, marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {data.item.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <OverLayForm
        IsOpen={this.props.OverLay}
        FormSty={{ marginTop: 100, height: "100%" }}
      >
        <FlatList
          scrollEnabled
          data={Country}
          //  ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          ListFooterComponent={<View style={{ width: 15 }}></View>}
          contentContainerStyle={{ paddingBottom: 250 }}
        />
      </OverLayForm>
    );
  }
}

const mapStateToProps = state => ({
  OverLay: state.WNews.OverLay
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { ChooseCountry, ShowOverLay }
)(DropDown);
