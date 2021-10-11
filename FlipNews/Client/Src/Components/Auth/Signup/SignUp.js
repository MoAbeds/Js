import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";

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
  Picker,
  Spinner
} from "native-base";

import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";

import Nlogo from "../../../../assets/Nlogo.png";
import { t } from "../../../Locales/index";
import { Mutation } from "@apollo/react-components";
import CREATEUSER from "../../../Graphql/Mutations/createUser";
import { CreateToken } from "../../../utils/Auth";
import { login } from "../../../Redux/Action/MainActions";
import { _styles } from "../../../Styles/Auth/Signup";
let Errors;
export class SignUp extends Component {
  state = {
    name: "",
    password: "",
    RePassword: "",
    email: "",
    country: "Egypth",
    error: null
  };

  onChangeName(name) {
    this.setState({ name });
  }

  onChangeEmail(email) {
    this.setState({ email });
  }

  onChangePassword(password) {
    this.setState({ password });
  }

  onChangeRePassword(RePassword) {
    this.setState({ RePassword });
  }

  onChangePicker(value) {
    this.setState({
      country: value
    });
  }
  //Method Fires on User Press the SignUp Button
  OnSignUpPressed = async ({ createUser }) => {
    const { password, email, name, country } = this.state;
    const Inputs = {
      email,
      password,
      name,
      country
    };

    //THen pass your createUser object as variables to the func argument which is the mutation func of the graphql server.
    const { data } = await createUser({
      variables: Inputs
    });

    try {
      await CreateToken(data.createUser.token);

      await this.props.login();
      console.log("SUC");
    } catch (error) {
      throw (Errors = error);
    }
  };

  static propTypes = {
    prop: PropTypes,
    login: PropTypes.func.isRequired
  };

  render() {
    const { password, email, RePassword, name } = this.state;

    return (
      <Animatable.View animation="zoomIn" iterationCount={1} direction={2000}>
        <View style={_styles.Container}>
          <Image source={Nlogo} style={_styles.Image} />

          <Content style={_styles.Content}>
            <H1 style={_styles.H1}>{t("LoginSecHeader")}</H1>
            <H3 style={_styles.H3}>
              create an account to get all news,Saved and Share it
            </H3>
            <Form style={_styles.Form}>
              <Item style={_styles.Item} stackedLabel>
                <Label>Name</Label>
                <Input
                  value={name}
                  onChangeText={name => this.onChangeName(name)}
                  style={_styles.InputField}
                />
              </Item>
              <Item style={_styles.Item} stackedLabel>
                <Label>Email</Label>
                <Input
                  value={email}
                  onChangeText={email => this.onChangeEmail(email)}
                  style={_styles.InputField}
                />
              </Item>
              <Item style={_styles.Item} stackedLabel>
                <Label>Password</Label>

                <Input
                  value={password}
                  onChangeText={password => this.onChangePassword(password)}
                  secureTextEntry
                  style={_styles.InputField}
                />
              </Item>

              <Item style={_styles.Item} stackedLabel>
                <Label>Confirm Password</Label>

                <Input
                  value={RePassword}
                  onChangeText={Repassword =>
                    this.onChangeRePassword(Repassword)
                  }
                  secureTextEntry
                  style={_styles.InputField}
                />
              </Item>

              <Item picker style={_styles.ItemPickerCont}>
                <Picker
                  mode="dropdown"
                  iosIcon={<AntDesign name="caretdown" size={20} />}
                  style={_styles.Picker}
                  placeholder="Choose your Country"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.country}
                  onValueChange={value => this.onChangePicker(value)}
                >
                  <Picker.Item label="Egypt" value="Egypt" />
                  <Picker.Item label="Ksa" value="Ksa" />
                </Picker>
              </Item>
            </Form>

            <Mutation mutation={CREATEUSER}>
              {(createUser, error) => {
                Errors = error;

                console.log("error-----------", Errors);
                Errors = error;

                //If there is an error throw the error
                if (error) {
                  Errors = error;
                  console.log("error----------", Errors);
                }
                if (createUser) {
                  //If the response has data load the response data via the createUser property.
                  return (
                    <View style={_styles.LinearGradient}>
                      <Button
                        transparent
                        onPress={() => this.OnSignUpPressed({ createUser })}
                        style={_styles.BtnContainer}
                      >
                        <Text style={_styles.BtnText}>Sign Up</Text>
                      </Button>
                    </View>
                  );
                }

                //By default it is loading the result so just return loading...
                return <Spinner color="#293551" style={_styles.Spinner} />;
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
  { login }
)(SignUp);
