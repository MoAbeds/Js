import React, { Component } from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

import BG from "../../../assets/welcome/BG.jpg";
import UserForm from "./UserForm";
import DropDown from "./DropDown";
import { IndexStyle as _Style } from "../../Styles/Welcome";
export class index extends Component {
  render() {
    return (
      <ImageBackground resizeMode="cover" source={BG} style={_Style.BG}>
        <UserForm />
        <DropDown />
      </ImageBackground>
    );
  }
}

export default index;
