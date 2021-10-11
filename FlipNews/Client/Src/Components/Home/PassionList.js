import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import { CreateTab } from "../../Redux/Action/MainActions";
let ArbArr = [
  "اخبار",
  "بيزنس",
  "تكنولوجيا",
  "رياضه",
  "سياسه",
  "علوم",
  "اخبار مشاهير",
  "علوم الحاسب",
  "الطقس",
  "الالعاب"
];

let EngArr = [
  "News",
  "Business",
  "Technology",
  "Sports",
  "Politics",
  "Science",
  "Celebrity",
  "Computer Science",
  "Weather",
  "Gaming"
];

export class PassionList extends Component {
  static propTypes = {
    prop: PropTypes,
    IsEngInUse: PropTypes.bool.isRequired,
    CreateTab: PropTypes.func.isRequired
  };

  _RenderListItems() {
    let { IsEngInUse, CreateTab } = this.props;
    if (IsEngInUse) {
      let arr = EngArr;
      return arr.map(i => (
        <ListItem onPress={() => CreateTab(i)}>
          <Text style={_styles.ListText}>{i}</Text>
        </ListItem>
      ));
    } else {
      let arr = ArbArr;
      return arr.map(i => (
        <ListItem onPress={() => CreateTab(i)}>
          <Text style={_styles.ListText}>{i}</Text>
        </ListItem>
      ));
    }
  }

  render() {
    return (
      <Container>
        <Content scrollEnabled style={{ height: "100%" }}>
          <List>{this._RenderListItems()}</List>
        </Content>
      </Container>
    );
  }
}

const _styles = StyleSheet.create({
  ListText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({
  IsEngInUse: state.Flip.IsEngInUse
});

export default connect(
  mapStateToProps,
  { CreateTab }
)(PassionList);
