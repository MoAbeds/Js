import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Tab, Tabs, ScrollableTab, TabHeading } from "native-base";

// Transaltion Function
import { t, ChangeLanguage } from "../../../Locales/index";
import PassionList from "../PassionList";
export class ARTabs extends Component {
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
          initialPage={2}
          renderTabBar={() => <ScrollableTab style={{ borderWidth: 0 }} />}
        >
          {ChangeLanguage("en")}
          <Tab
            heading={
              <TabHeading style={[_styles.TabSty, { width: 200 }]}>
                <Text style={_styles.TabText}> ماذا تحب ان تقرأ</Text>
              </TabHeading>
            }
            tabStyle={{ width: 90, backgroundColor: "red" }}
            activeTabStyle={_styles.ActTabSty}
            activeTextStyle={_styles.TabText}
            textStyle={{ color: "gray" }}
          >
            <PassionList />
          </Tab>

          {this._renderCustomTabs()}

          <Tab
            heading={
              <TabHeading style={[_styles.TabSty, { width: 160 }]}>
                <Text style={_styles.TabText}>اخبار اليوم</Text>
              </TabHeading>
            }
            tabStyle={_styles.TabSty}
            activeTabStyle={_styles.ActTabSty}
            activeTextStyle={_styles.TabText}
            textStyle={{ color: "gray" }}
          />

          <Tab
            heading={
              <TabHeading style={[_styles.TabSty, { width: 150 }]}>
                <Text style={_styles.TabText}>مخصص لك</Text>
              </TabHeading>
            }
            tabStyle={_styles.TabSty}
            activeTabStyle={_styles.ActTabSty}
          />
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
)(ARTabs);
