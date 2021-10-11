import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Platform,
  StatusBar,
  ScrollView
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { t } from "../../Locales/index";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { SwipeRow } from "react-native-swipe-list-view";
import * as Animatable from "react-native-animatable";

import {
  Container,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Header,
  ListItem,
  Spinner,
  Content
} from "native-base";
import { Query } from "@apollo/react-components";
import { SendWebLink } from "../../Redux/Action/MainActions";
import { Actions } from "react-native-router-flux";
import GETARTICLES from "../../Graphql/Queries/getArticles";

let Articles = [];

export class SavedMainComp extends PureComponent {
  state = {
    Arr: []
  };
  static propTypes = {
    prop: PropTypes
  };

  deleteRow(index) {
    const newData = [...Articles];
    const prevIndex = Articles.filter(ArticleIndex => ArticleIndex !== index);
  }

  _renderItem(items) {
    return items.map((item, index) => (
      <View style={_styles.Container}>
        <SwipeRow disableRightSwipe rightOpenValue={-75}>
          <View style={_styles.standaloneRowBack}>
            <View />
            <TouchableWithoutFeedback
              onPress={() => {
                this.deleteRow(index);
              }}
            >
              <View style={_styles.RightBtnCheck}>
                <AntDesign
                  style={_styles.DeleteIcon}
                  name="delete"
                  size={30}
                  color="white"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={_styles.standaloneRowFront}>
            <View>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.props.SendWebLink(item), Actions.WebView();
                }}
              >
                <ListItem style={_styles.ListItem}>
                  <Body>
                    <Text style={_styles.ListItemText}>{item.title}</Text>
                  </Body>
                  <Right style={{ marginRight: -19 }}>
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        marginLeft: 20
                      }}
                      source={{ uri: item.urlToImage }}
                    />
                  </Right>
                </ListItem>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </SwipeRow>
      </View>
    ));
  }

  render() {
    return (
      <Container style={{ alignSelf: "center", width: "100%" }}>
        <Header style={{ backgroundColor: "#293551" }}>
          <StatusBar backgroundColor="#293551" />

          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "900",
              marginTop: 10
            }}
          >
            SavedArticles
          </Text>
        </Header>
        <Query fetchPolicy="cache-and-network" query={GETARTICLES}>
          {(response, error) => {
            //If there is an error log the error to the console.
            if (error) {
              console.log("Get Player Error------", error);
            }
            //If the response has data.
            if (response.data && response.data.getArticles) {
              Articles = response.data.getArticles;

              return (
                <Content
                  disableIntervalMomentum={true}
                  style={{
                    marginTop: 20,
                    alignSelf: "center",
                    width: "90%",
                    paddingBottom: 10
                  }}
                  contentContainerStyle={{ paddingBottom: 10 }}
                >
                  {this._renderItem(Articles)}
                </Content>
              );
            }
            return <Spinner style={_styles.Spinner} color="#293551" />;
          }}
        </Query>
      </Container>
    );
  }
}

const _styles = StyleSheet.create({
  Container: {
    marginTop: 20,
    width: 320,
    paddingTop: 10
  },

  standaloneRowFront: {
    height: 100,
    borderRadius: 10,
    width: 320,
    shadowColor: "#293551",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 18
  },
  standaloneRowBack: {
    alignItems: "center",
    // backgroundColor: "#8BC645",
    borderRadius: 10,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300
  },
  LeftBtnCheck: {
    backgroundColor: "#8BC645",
    width: 300,
    height: 100,
    borderRadius: 10
  },
  RightBtnCheck: {
    backgroundColor: "#D15663",
    height: 100,
    borderRadius: 10
  },
  UrgentText: {
    color: "white",
    fontSize: 17,
    fontWeight: "900",
    marginLeft: 45,
    marginTop: -20
  },
  OthersText: {
    color: "black",
    fontSize: 17,
    fontWeight: "900",
    marginLeft: 10
  },
  StandLine: {
    height: 100,
    width: 5,
    marginLeft: -43,
    marginTop: -10
  },
  CheckIcon: {
    marginTop: 27,
    marginLeft: 10
  },
  DeleteIcon: {
    marginLeft: 60,
    marginTop: 27
  },
  ListItem: {
    backgroundColor: "white",
    borderRadius: 10,
    alignSelf: "center",
    width: 320,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },

  ListItemText: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "500",
    alignSelf: "center",
    marginRight: 40,
    marginBottom: 20
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { SendWebLink }
)(SavedMainComp);
