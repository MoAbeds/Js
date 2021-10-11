import { StyleSheet } from "react-native";

const IndexStyle = StyleSheet.create({
  BG: {
    width: "100%",
    height: "100%"
  }
});

const OverLay_Sty = StyleSheet.create({
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
    opacity: 0.4,
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

const UserForm_Sty = StyleSheet.create({
  Cont: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 250,
    width: "70%"
    // height: 300
  },

  Label: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    marginTop: -5
  },
  Input: {
    borderColor: "black",
    borderBottomWidth: 3,
    borderBottomColor: "black"
  },
  Picker: {
    borderColor: "black",
    borderBottomWidth: 3,
    borderBottomColor: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    marginTop: -5
  },
  CheckCont: {
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50
  },
  CheckBox: {
    alignItems: "center",
    justifyContent: "center",
    color: "#0098ce",
    borderRadius: 5
  },
  GoBtn: {
    borderRadius: 40,
    alignSelf: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    justifyContent: "center",
    backgroundColor: "#0098ce",
    marginTop: 20
  }
});

export { UserForm_Sty, OverLay_Sty, IndexStyle };
