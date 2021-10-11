import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import { connect } from "react-redux";
import {
  H1,
  H3,
  Button,
  Content,
  Form,
  Item,
  Label,
  Input,
  Spinner
} from "native-base";

import { Actions } from "react-native-router-flux";
import * as Animatable from "react-native-animatable";

import Nlogo from "../../../../assets/Nlogo.png";
import { t } from "../../../Locales/index";
import { Mutation } from "@apollo/react-components";
import LOGING from "../../../Graphql/Mutations/login";
import { CreateToken } from "../../../utils/Auth";
import { _styles } from "../../../Styles/Auth/Login";
export class Login extends Component {
  state = {
    password: "",
    email: ""
  };

  onChangeUserNameText(email) {
    this.setState({ email });
  }

  onChangePasswordText(password) {
    this.setState({ password });
  }

  //Method used in The mutation when user Press
  onLoginPressed = async ({ login }) => {
    const { password, email } = this.state;
    const Inputs = {
      email,
      password
    };

    //THen pass your Login object as variables to the func argument which is the mutation func of the graphql server.
    const { data } = await login({
      variables: Inputs
    });

    try {
      //Create and Save Token
      await CreateToken(data.login.token);
      Actions.main();
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { password, email } = this.state;

    return (
      <Animatable.View
        animation="slideInLeft"
        iterationCount={1}
        direction={2000}
      >
        <View style={_styles.Container}>
          <Image source={Nlogo} style={_styles.Image} />

          <Content style={_styles.Content}>
            <H1 style={_styles.H1}>{t("LoginSecHeader")}</H1>
            <H3 style={_styles.H3}>{t("LoginSecSubHeader")}</H3>
            <Form style={_styles.Form}>
              <Item style={_styles.Item} stackedLabel>
                <Label>Email</Label>
                <Input
                  value={email}
                  onChangeText={email => this.onChangeUserNameText(email)}
                  style={_styles.InputField}
                />
              </Item>
              <Item style={_styles.Item} stackedLabel>
                <Label>Password</Label>

                <Input
                  value={password}
                  onChangeText={password => this.onChangePasswordText(password)}
                  secureTextEntry
                  style={_styles.InputField}
                />
              </Item>
            </Form>
            <Button style={_styles.ForgotBtnCont} transparent>
              <Text style={_styles.ForgotText}>{t("LoginSecForgotPass")}</Text>
            </Button>

            <Mutation mutation={LOGING}>
              {(login, error) => {
                console.log("error-----------", error);
                //If there is an error throw the error
                if (error) {
                  console.log("error----------", error);
                }
                if (login) {
                  //If the response has data load the response data via the Login Mutation property.
                  return (
                    <View style={_styles.LinearGradient}>
                      <Button
                        transparent
                        onPress={() => this.onLoginPressed({ login })}
                        style={_styles.BtnContainer}
                      >
                        <Text style={_styles.BtnText}>{t("LoginSecBtn")}</Text>
                      </Button>
                    </View>
                  );
                }

                //By default it is loading the result so just return loading...
                return <Spinner color="293551" style={_styles.Spinner} />;
              }}
            </Mutation>
          </Content>
        </View>
      </Animatable.View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  null
)(Login);
