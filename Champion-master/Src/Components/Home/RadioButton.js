import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { RadioButton as styles } from "../../Styles";
export default class RadioButtons extends Component {
  render() {
    const { options, value } = this.props;

    return (
      <View style={styles.Container}>
        {options.map(item => {
          return (
            <View key={item.value} style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => this.props.Onpressed(item)}
              >
                {value === item.value && <View style={styles.checkedCircle} />}
              </TouchableOpacity>
              <Text style={styles.LabelText}>{item.label}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
