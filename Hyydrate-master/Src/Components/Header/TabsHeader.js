import React from "react";
import { Text, StyleSheet } from "react-native";
import { Tab, Tabs, TabHeading } from "native-base";
import Historypage from "../../Containers/Historypage";
import MainHomePage from "../../Containers/MainHomePage";
import SettingsView from "../../Containers/SettingsView";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const TabsHeader = () => {
  return (
    <Tabs tabContainerStyle={_styles.TabSty}>
      <Tab
        activeTabStyle={_styles.TabSty}
        tabStyle={_styles.TabSty}
        heading={
          <TabHeading style={_styles.TabSty}>
            <Ionicons color="white" name="ios-water" size={25} />
            <Text style={_styles.IconSty}>Home</Text>
          </TabHeading>
        }
      >
        <MainHomePage />
      </Tab>
      <Tab
        tabStyle={_styles.TabSty}
        activeTabStyle={_styles.TabSty}
        heading={
          <TabHeading style={_styles.TabSty}>
            <MaterialIcons color="white" name="history" size={25} />
            <Text style={_styles.IconSty}>History</Text>
          </TabHeading>
        }
      >
        <Historypage />
      </Tab>
      <Tab
        tabStyle={_styles.TabSty}
        activeTabStyle={_styles.TabSty}
        heading={
          <TabHeading style={_styles.TabSty}>
            <Ionicons color="white" name="ios-settings" size={25} />
            <Text style={_styles.IconSty}>Settings</Text>
          </TabHeading>
        }
      >
        <SettingsView />
      </Tab>
    </Tabs>
  );
};

const _styles = StyleSheet.create({
  TabSty: {
    elevation: 0
  },

  IconSty: {
    paddingLeft: 7,
    color: "white"
  }
});

export default TabsHeader;
