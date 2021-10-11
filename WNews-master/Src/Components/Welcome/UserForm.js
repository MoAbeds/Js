import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  ListItem,
  CheckBox,
  Body,
  Button
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { ShowOverLay } from "../../Redux/Action/MainActions";
import { UserForm_Sty as _Style } from "../../Styles/Welcome";
import { Actions } from "react-native-router-flux";

export class UserForm extends Component {
  state = {
    Checked: false,
    Name: "",
    Country: ""
  };

  static propTypes = {
    prop: PropTypes,
    WNews: PropTypes.string.isRequired,
    ShowOverLay: PropTypes.func.isRequired
  };

  GoBtn() {
    Actions.Topics();
  }

  render() {
    let { Checked, Name } = this.state;
    const { Country, ShowOverLay } = this.props;
    return (
      <View style={_Style.Cont}>
        <Form>
          <Item style={{ borderColor: "transparent" }} floatingLabel>
            <Label style={_Style.Label}>Name</Label>
            <Input
              value={Name}
              onChangeText={e => this.setState({ Name: e })}
              style={_Style.Input}
            />
          </Item>
          <Item
            onPress={() => ShowOverLay()}
            floatingLabel
            style={{ flexDirection: "row", borderColor: "transparent" }}
            last
          >
            <Input
              disabled
              placeholder={Country}
              placeholderTextColor="black"
              style={_Style.Picker}
            />
          </Item>
          <AntDesign
            name="caretdown"
            size={20}
            color="black"
            style={{ marginTop: -20, marginLeft: 240 }}
          />

          <Text style={{ marginTop: 20, textAlign: "center", color: "gray" }}>
            You can change it later also
          </Text>

          <ListItem style={_Style.CheckCont}>
            <CheckBox
              style={_Style.CheckBox}
              checked={Checked}
              color="#0098ce"
              onPress={() => this.setState({ Checked: !Checked })}
            />
            <Body>
              <Text style={{ marginLeft: 10, color: "gray" }}>
                Terms and Conditions
              </Text>
            </Body>
          </ListItem>

          <Button
            onPress={() => this.GoBtn()}
            disabled={Checked ? false : true}
            style={_Style.GoBtn}
          >
            <AntDesign
              name="arrowright"
              size={40}
              style={{ justifyContent: "center" }}
              color="white"
            />
          </Button>
        </Form>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  Country: state.WNews.Country
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { ShowOverLay })(UserForm);
