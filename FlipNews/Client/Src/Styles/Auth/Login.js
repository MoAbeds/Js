import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  ToggleHeader: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
    marginTop: 50,
    fontFamily: "Roboto"
  },
  Container: {
    backgroundColor: "white",
    marginTop: 100,
    alignSelf: "center",
    width: "85%",
    height: 500,
    borderRadius: 15
  },
  Image: {
    height: 60,
    width: 40,
    marginTop: 15,
    paddingBottom: 5,
    alignSelf: "center"
  },
  Content: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center"
  },
  H1: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5,
    color: "#293551"
  },
  H3: {
    fontSize: 10,
    color: "gray",
    marginLeft: 10
  },
  Form: {
    //alignSelf: "center",
    //  alignItems: "center"
  },
  Item: {
    // borderColor: "#293551",
    borderColor: "transparent"
  },
  InputField: {
    width: "95%",
    borderWidth: 0.5,
    borderRadius: 20,
    height: 40,
    marginTop: 15
  },
  EyeIcon: {
    //  backgroundColor: "transparent"
  },
  ForgotBtnCont: {
    alignSelf: "center",
    marginTop: 40
  },
  ForgotText: {
    color: "gray"
  },
  LinearGradient: {
    width: 100,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#293551"
  },
  BtnContainer: {
    textAlign: "center",
    width: 100,
    borderRadius: 20
  },
  BtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "800",
    width: "100%"
  },
  Spinner: {
    marginTop: 50,
    alignSelf: "center"
  }
});

export { _styles };
