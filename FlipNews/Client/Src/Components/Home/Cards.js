import React, { PureComponent } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Query } from "@apollo/react-components";
import Carousel from "react-native-snap-carousel";
import { Spinner } from "native-base";
import { SendWebLink } from "../../Redux/Action/MainActions";
import { Actions } from "react-native-router-flux";
import NEWS from "../../Graphql/Queries/news";
import { _styles } from "../../Styles/Home/Card";
export class Cards extends PureComponent {
  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
  }

  static propTypes = {
    prop: PropTypes,
    SendWebLink: PropTypes.func.isRequired
  };

  _renderItem({ item }) {
    const { SendWebLink } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          SendWebLink(item), Actions.WebView();
        }}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 15 }}
          style={_styles.SliderBG}
          source={{ uri: item.urlToImage }}
        >
          <View style={_styles.SliderViewCont}>
            <Text style={_styles.SliderTitle}>{item.title}</Text>
            <Text style={_styles.SliderDesc}>
              {item.description.length < 100
                ? `${item.description}`
                : `${item.description.substring(0, 100)}...`}
            </Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View>
        <Query
          query={NEWS}
          variables={{ value: "general" }}
          fetchPolicy="cache-and-network"
        >
          {(response, error) => {
            //If there is an error log the error to the console.
            if (error) {
              console.log("Get News Error------", error);
            }
            //Array to get News
            let News = [];
            //If the response has data.
            if (response.data && response.data.news) {
              //Update the News Array
              News = response.data.news;
              return (
                <View style={_styles.Container}>
                  <Carousel
                    layout={"tinder"}
                    layoutCardOffset={`9`}
                    data={News}
                    renderItem={this._renderItem}
                    itemWidth={Dimensions.get("window").width * 0.85}
                    sliderWidth={Dimensions.get("window").width}
                    containerCustomStyle={_styles.CarouselcontainerCustomStyle}
                    slideStyle={_styles.CarouselSlideStyle}
                  />
                </View>
              );
            }
            //Return the loading text if there is no data.
            return <Spinner style={_styles.Spinner} color="#293551" />;
          }}
        </Query>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { SendWebLink }
)(Cards);
