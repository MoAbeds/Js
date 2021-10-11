import React, { Component } from "react";
import {
  View,
  Text,
  WebView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import * as Animatable from "react-native-animatable";
import { Mutation } from "@apollo/react-components";
import CREATEARTICLE from "../Graphql/Mutations/createArticle";
import WLogo from "../../assets/WLogo.png";
import { Actions } from "react-native-router-flux";
import uuid from "uuid";
let Errors;

export class WebViewCom extends Component {
  state = {
    ToggleSaved: false
  };
  static propTypes = {
    prop: PropTypes
  };

  onSavedPressed = async ({ createArticle }) => {
    let { WebViewLink } = this.props;
    WebViewLink.id = uuid();

    const { data } = await createArticle({
      variables: WebViewLink
    });
  };

  onRemovedPressed = async ({ deleteArticle }) => {
    let { WebViewLink } = this.props;
    const { data } = await deleteArticle({
      variables: WebViewLink.id
    });
    this.setState({ ToggleSaved: false });
  };

  render() {
    let { ToggleSaved } = this.state;
    return (
      <Animatable.View
        animation="fadeInUpBig"
        iterationCount={1}
        direction={2000}
      >
        <StatusBar backgroundColor="#293551" />

        <View style={{ height: "100%" }}>
          <Header
            androidStatusBarColor="#293551"
            style={{ backgroundColor: "#293551" }}
          >
            <Left>
              <TouchableWithoutFeedback onPress={() => Actions.main()}>
                <AntDesign name="arrowleft" color="white" size={25} />
              </TouchableWithoutFeedback>
            </Left>
            {console.log(this.props.WebViewLink)}
            <Body style={{ alignContent: "center" }}>
              <Image
                source={WLogo}
                style={{
                  height: 30,
                  width: 20,
                  alignSelf: "center",
                  marginRight: -95
                }}
              />
            </Body>

            <Right>
              <Mutation mutation={CREATEARTICLE}>
                {(createArticle, error, data) => {
                  Errors = error;

                  console.log("error-----------", Errors);
                  Errors = error;

                  if (error) {
                    Errors = error;
                    console.log("error----------", Errors);
                  }

                  if (createArticle) {
                    //If the response has data load the response data via the createPlayer property.
                    return (
                      <TouchableWithoutFeedback
                        onPress={() => {
                          this.setState({ ToggleSaved: true });
                          this.onSavedPressed({ createArticle });
                        }}
                      >
                        <FontAwesome
                          style={{ marginRight: 35 }}
                          name={ToggleSaved ? "bookmark" : "bookmark-o"}
                          color="white"
                          size={25}
                        />
                      </TouchableWithoutFeedback>
                    );
                  }

                  //By default it is loading the result so just return loading...
                  return <Text>Loading...</Text>;
                }}
              </Mutation>

              <TouchableWithoutFeedback>
                <FontAwesome
                  style={{ marginRight: 10 }}
                  name="ellipsis-v"
                  color="white"
                  size={25}
                />
              </TouchableWithoutFeedback>
            </Right>
          </Header>
          <WebView
            style={{ height: "100%" }}
            source={{ uri: this.props.WebViewLink.url }}
          />
        </View>
      </Animatable.View>
    );
  }
}

//

const _styles = StyleSheet.create({});

const mapStateToProps = state => ({
  WebViewLink: state.Reporterr.WebViewLink
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebViewCom);
