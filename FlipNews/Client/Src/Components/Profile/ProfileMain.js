import React, { PureComponent } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { t } from "../../Locales/index";
import { LinearGradient } from "expo-linear-gradient";
import { Query } from "@apollo/react-components";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Spinner } from "native-base";
import { signOut } from "../../utils/Auth";
import USER from "../../Graphql/Queries/user";
import { Actions } from "react-native-router-flux";
import { _styles } from "../../Styles/Profile/ProfileMain";
export class ProfileMain extends PureComponent {
  state = {
    Auth: {}
  };
  static propTypes = {
    prop: PropTypes,
    isAuth: PropTypes.bool.isRequired
  };

  onSignOut = async () => {
    await signOut();
    Actions.auth();
  };

  _renderSignUpitems(Auth) {
    if (!Auth) {
      return (
        <View style={_styles.SignUpContainer}>
          <Text style={_styles.SText}>{t("SignUpText")}</Text>

          <TouchableWithoutFeedback>
            <View style={_styles.BtnContainer}>
              <Text style={_styles.BtnText}>{t("BtnText")}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
  }

  _renderProfileitems(Auth) {
    let Name;
    let Charcter;
    if (Auth) {
      Name = Auth.name;
      Charcter = Name.charAt(0);
    } else {
      Name = t("Profile");
      Charcter = "?";
    }

    return (
      <View style={{ alignItems: "center", width: "100%" }}>
        <View style={_styles.ViewCircle}>
          <Text style={_styles.CircleText}>{Charcter}</Text>
        </View>
        <Text style={_styles.ProfileText}>{Name}</Text>
        {this._renderSignUpitems(Auth)}
        <TouchableWithoutFeedback onPress={() => Actions.Loved()}>
          <View style={_styles.ListItem}>
            <FontAwesome
              style={{ marginLeft: 20, marginTop: 20 }}
              color="#293551"
              size={25}
              name="bookmark"
            />

            <Text style={_styles.ListItemText}>Saved Articles</Text>
            <Text style={_styles.ListLeng}>{Auth.savedarticles.length}</Text>
            <AntDesign
              name="right"
              color="#65009E"
              size={25}
              style={_styles.IconRight}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.onSignOut()}>
          <View style={_styles.SignoutBtn}>
            <Text style={_styles.SignoutBtnText}>SignOut</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  render() {
    return (
      <Query query={USER} fetchPolicy="cache-and-network">
        {(response, error) => {
          //If there is an error log the error to the console.
          if (error) {
            console.log("Get Player Error------", error);
          }
          //If the response has data.
          if (response.data && response.data.user) {
            this.setState({ Auth: response.data.user });
            console.log(response.data.user);

            return (
              <LinearGradient
                colors={["#2A63F4", "#293551"]}
                style={_styles.Container}
              >
                {this._renderProfileitems(response.data.user)}
              </LinearGradient>
            );
          }
          //Return the loading text if there is no data.
          return <Spinner style={{ marginTop: 50 }} color="#293551" />;
        }}
      </Query>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.FlipAuth.isAuth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMain);
