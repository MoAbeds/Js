import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  Platform
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

import { Header, Left, Right } from "native-base";
import * as Animatable from "react-native-animatable";
import { Actions } from "react-native-router-flux";
import uuid from "uuid";
import { SendWebLink } from "../../Redux/Action/MainActions";

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
        style={_styles.container}
      >
        <View style={{ height: "100%" }}>
          <Header
            androidStatusBarColor="#0098ce"
            style={{ backgroundColor: "#0098ce" }}
          >
            <Left>
              <TouchableWithoutFeedback onPress={() => Actions.main()}>
                <AntDesign name="arrowleft" color="white" size={25} />
              </TouchableWithoutFeedback>
            </Left>

            <Right>
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
            source={{ uri: this.props.WebViewLink }}
          />
          {console.log(this.props.WebViewLink)}
        </View>
      </Animatable.View>
    );
  }
}

//

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

const mapStateToProps = state => ({
  WebViewLink: state.WNews.WebViewLink
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { SendWebLink })(WebViewCom);
