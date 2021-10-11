import { StyleSheet } from "react-native";
//Style for ../Components/Home/Header
const MainHomeHeader = StyleSheet.create({
  Container: {
    marginTop: 50,
    marginLeft: 50
  },
  NameText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  Desc: {
    color: "white",
    fontSize: 13
  },
  BtnContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 240,
    marginTop: -10,
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center"
  },
  BtnIcon: {
    alignSelf: "center",
    marginLeft: 10
  }
});

//Style for ../Components/OverLayForm
const Overlay = StyleSheet.create({
  Container: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    height: "100%"
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: "black",
    width: "100%",
    height: "100%"
  },
  FormSty: {
    width: 300,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    paddingBottom: 10
  }
});

//Style for ../Components/Home/RadioButton.js
const RadioButton = StyleSheet.create({
  Container: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    marginTop: 20,
    marginLeft: 20,
    paddingBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center"
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#E97295"
  },
  LabelText: {
    fontWeight: "600",
    color: "black",
    marginLeft: 5,
    paddingRight: 5
  }
});

//Style for ../Components/Home/OverLayCompoenents.js
const OverLayCompoenents = StyleSheet.create({
  TitleInput: {
    width: "70%",
    marginTop: 20,
    height: 40,
    fontSize: 25,
    fontWeight: "900",
    color: "black",
    marginLeft: 10
  },
  WhenText: {
    fontSize: 17,
    fontWeight: "700",
    color: "black",
    marginLeft: 10,
    marginTop: 10
  },
  SliderText: {
    fontSize: 17,
    fontWeight: "700",
    color: "black",
    marginLeft: 10,
    marginTop: 60
  },
  track: {
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: "#ACACAC",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.15,
    marginLeft: 10
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "#E97295",
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
    marginLeft: 10
  },
  BtnContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 230,
    marginTop: -20,
    backgroundColor: "#E97295",
    alignContent: "center",
    alignItems: "center"
  },
  BtnIcon: {
    alignSelf: "center",
    marginLeft: 10
  },
  ClockBtn: { marginLeft: 70 },
  ClockText: {
    fontSize: 35,
    fontWeight: "900"
  },
  DescContainer: {
    width: "80%",
    marginLeft: 10,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 15
  },

  ToggleDescIcon: {
    marginLeft: 10,
    marginTop: 11
  }
});

//Style for TodoCard.js  ../Components/Home/TodoCard.js

const TodoCard = StyleSheet.create({
  Container: {
    marginTop: 0,
    width: 270,

    alignSelf: "center",
    paddingTop: 10,
    flexDirection: "row"
  },
  standaloneRowFront: {
    height: 80,
    borderRadius: 10,
    width: 270,
    shadowColor: "#fc4a1a",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  standaloneRowBack: {
    alignItems: "center",
    // backgroundColor: "#8BC645",
    borderRadius: 10,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    width: 270
  },
  Title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 5
  },
  RadioValue: {
    color: "white",
    fontSize: 13,
    fontWeight: "800",
    marginLeft: 17,
    marginTop: 5
  },
  track: {
    height: 10,
    borderRadius: 15 / 2,
    backgroundColor: "gray",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.15,
    marginLeft: 10
  },
  thumb: {
    width: 20,
    height: 10,
    backgroundColor: "gray",
    borderColor: "transparent",
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
    marginLeft: 10
  },
  Time: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 210,
    marginTop: -37
  },
  LeftBtnCheck: {
    backgroundColor: "#8BC645",
    width: "50%",
    height: 80,
    borderRadius: 10
  },
  RightBtnCheck: {
    backgroundColor: "#D15663",
    width: "50%",
    height: 80,
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
    marginLeft: 75,
    marginTop: 27
  },
  ThreeDotsIcon: {
    marginLeft: 240,
    marginTop: -40
  },
  SliderContainer: {
    width: 70,
    marginTop: 20,
    flexDirection: "row"
  },
  CircleFirst: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2
  },
  CircleSec: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2
  }
});

export { MainHomeHeader, Overlay, RadioButton, OverLayCompoenents, TodoCard };
