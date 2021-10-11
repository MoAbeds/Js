import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Form, Button, Content } from "native-base";
import OverLayForm from "../Main/OverLayForm";
import UP from "../../../assets/images/UP.svg";
import { ToggleSUCCMenu } from "../../Redux/Action/Hyydrate_Actions";
export class WellDoneOverLay extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    let { ShowSuccPage, ToggleSUCCMenu } = this.props;
    return (
      <OverLayForm
        FormSty={{ marginTop: 250, height: 200 }}
        Style={{ height: "100%" }}
        IsOpen={ShowSuccPage}
      >
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <UP height={100} width={100} />
          <Text style={_styles.TextSty}>Well Done, stay hydrated!</Text>

          <TouchableWithoutFeedback onPress={() => ToggleSUCCMenu()}>
            <View style={_styles.btnSty}>
              <Text style={_styles.btnText}>GOT IT</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/** 
      <View style={_styles.Container}>
        {ShowSuccPage ? (
          <View style={{ height: "100%" }}>
            <View style={_styles.overlay} />
            <Form style={_styles.FormSty}>

              <TouchableWithoutFeedback onPress={() => ToggleSUCCMenu()}>
                <View style={_styles.btnSty}>
                  <Text style={_styles.btnText}>GOT IT</Text>
                </View>
              </TouchableWithoutFeedback>
            </Form>
          </View>
        ) : null}
      </View>
      */}
      </OverLayForm>
    );
  }
}

const _styles = StyleSheet.create({
  TextSty: {
    fontSize: 15,
    marginLeft: 5
  },
  btnSty: {
    width: "70%",
    alignSelf: "center",
    backgroundColor: "#00B4DB",
    borderRadius: 15,
    textAlign: "center",
    height: 50,
    marginTop: 10
  },
  btnText: {
    textAlign: "center",
    marginTop: 15,
    color: "white"
  }
});

const mapStateToProps = state => ({
  ShowSuccPage: state.Hyydrate.ShowSuccPage
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { ToggleSUCCMenu }
)(WellDoneOverLay);
