import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Tab, Tabs, ScrollableTab, TabHeading } from "native-base";

import PassionList from "../PassionList";
export class ENTabs extends Component {
  static propTypes = {
    prop: PropTypes,
    CustomTabs: PropTypes.array.isRequired
  };

  // Render Custom tabs From Passion List
  _renderCustomTabs() {
    let { CustomTabs } = this.props;
    if (CustomTabs) {
      return CustomTabs.map(tab => (
        <Tab
          heading={
            <TabHeading style={_styles.TabSty}>
              <Text style={_styles.TabText}>{tab}</Text>
            </TabHeading>
          }
          tabStyle={{ width: 90, backgroundColor: "red" }}
          activeTabStyle={_styles.ActTabSty}
          activeTextStyle={_styles.TabText}
          textStyle={{ color: "gray" }}
        />
      ));
    }
  }

  render() {
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={{ backgroundColor: "#E3170A" }}
          tabBarTextStyle={_styles.TabSty}
          tabContainerStyle={_styles.TabsContainerSty}
          style={_styles.TabsContainerSty}
          tabBarBackgroundColor="white"
          renderTabBar={() => <ScrollableTab style={{ borderWidth: 0 }} />}
        >
          <Tab
            heading={
              <TabHeading style={_styles.TabSty}>
                <Text style={_styles.TabText}>For You</Text>
              </TabHeading>
            }
            tabStyle={{ width: 90, backgroundColor: "red" }}
            activeTabStyle={_styles.ActTabSty}
            activeTextStyle={_styles.TabText}
            textStyle={{ color: "gray" }}
          />

          <Tab
            heading={
              <TabHeading style={[_styles.TabSty, { width: 200 }]}>
                <Text style={_styles.TabText}>Todays Read</Text>
              </TabHeading>
            }
            tabStyle={_styles.TabSty}
            activeTabStyle={_styles.ActTabSty}
            activeTextStyle={_styles.TabText}
            textStyle={{ color: "gray" }}
          />

          {this._renderCustomTabs()}

          <Tab
            heading={
              <TabHeading style={_styles.TabSty}>
                <Text style={_styles.TabText}>WHAT'S YOUR PASSION?</Text>
              </TabHeading>
            }
            tabStyle={_styles.TabSty}
            activeTabStyle={_styles.ActTabSty}
          >
            <PassionList />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const _styles = StyleSheet.create({
  TabsContainerSty: {
    elevation: 0,
    backgroundColor: "white",
    marginTop: 20,
    fontSize: 25
  },

  TabSty: {
    backgroundColor: "white",
    elevation: 0,
    fontSize: 25,
    color: "gray"
  },
  TabText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold"
  },
  ActTabSty: {
    borderBottomWidth: 2,
    borderBottomColor: "#E3170A",
    backgroundColor: "red",
    color: "black"
  }
});

const mapStateToProps = state => ({
  CustomTabs: state.Flip.CustomTabs
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ENTabs);
