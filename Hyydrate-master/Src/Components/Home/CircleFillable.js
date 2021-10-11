import React, { Component } from "react";
import { Animated, Text, TextInput, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class CircleFillable extends Component {
  anim = new Animated.Value(this.props.fill);

  componentDidUpdate(propsOld) {
    const { fill } = this.props;
    const { fill: fillOld } = propsOld;

    if (fill !== fillOld) {
      Animated.timing(this.anim, { toValue: fill, duration: 2000 }).start();
    }
  }
  render() {
    const fillAnim = {
      height: this.anim.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"]
      })
    };
    return (
      <View style={styles.circle}>
        <Animated.View style={[styles.circleFill, fillAnim]} />
        <MaterialCommunityIcons
          name="brain"
          color="white"
          size={190}
          style={{
            marginTop: 15,
            position: "absolute",
            alignSelf: "center"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderWidth: 10,
    borderColor: "#E8E8E8",
    overflow: "hidden"
  },
  circleFill: {
    backgroundColor: "#00B4DB",
    width: "100%",
    bottom: 0,
    position: "absolute"
  }
});
