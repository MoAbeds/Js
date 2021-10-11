import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Container, Header, Body } from "native-base";
import OverLayMenu from "../Components/Home/OverLayMenu";
import WellDoneOverLay from "../Components/Home/WellDoneOverLay";
import TabsHeader from "../Components/Header/TabsHeader";
import CustomizeOverlayMenu from "../Components/Home/CustomizeOverlayMenu";
export class HeaderView extends Component {
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#00B4DB"
          style={_styles.HeaderSty}
          hasTabs
        >
          <Body>
            <Text style={_styles.Textsty}>Hyydrate</Text>
          </Body>
        </Header>

        <TabsHeader />
        <OverLayMenu />
        <CustomizeOverlayMenu />
        <WellDoneOverLay />
      </Container>
    );
  }
}

const _styles = StyleSheet.create({
  Textsty: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  }
});

export default HeaderView;
