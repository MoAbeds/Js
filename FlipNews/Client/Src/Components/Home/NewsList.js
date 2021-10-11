import React, { PureComponent } from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";

import { Query } from "@apollo/react-components";
import {
  Container,
  Content,
  ListItem,
  Body,
  Right,
  Spinner
} from "native-base";

import NEWS from "../../Graphql/Queries/news";
import { SendWebLink } from "../../Redux/Action/MainActions";
import { Actions } from "react-native-router-flux";
import { _styles } from "../../Styles/Home/NewsList";
export class NewsList extends PureComponent {
  state = {
    Arr: []
  };
  static propTypes = {
    prop: PropTypes,
    ChoosenNews: PropTypes.string.isRequired
  };

  _renderItem({ item }) {
    return (
      <Animatable.View
        animation="slideInRight"
        iterationCount={1}
        direction={300}
      >
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
                style={_styles.ItemImage}
                source={{ uri: item.urlToImage }}
              />
            </Right>
          </ListItem>
        </TouchableWithoutFeedback>
      </Animatable.View>
    );
  }

  render() {
    let { ChoosenNews } = this.props;
    return (
      <Container style={{ backgroundColor: "transparent" }}>
        <Content scrollEnabled>
          <Query
            query={NEWS}
            variables={{ value: ChoosenNews }}
            fetchPolicy="cache-and-network"
          >
            {(response, error) => {
              //If there is an error log the error to the console.
              if (error) {
                console.log("Get Player Error------", error);
              }
              //If the response has data.
              if (response.data && response.data.news) {
                this.setState({ Arr: response.data.news });

                return (
                  <FlatList
                    data={this.state.Arr}
                    renderItem={item => this._renderItem(item)}
                    extraData={this.state}
                    contentContainerStyle={{
                      paddingBottom: 20,
                      paddingTop: 20
                    }}
                  />
                );
              }
              //Return the loading text if there is no data.
              return <Spinner color="#293551" style={_styles.Spinner} />;
            }}
          </Query>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ChoosenNews: state.Reporterr.ChoosenNews
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { SendWebLink }
)(NewsList);
