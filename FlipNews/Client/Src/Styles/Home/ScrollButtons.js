import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  ListItem: {
    borderRadius: 10,
    marginTop: 12,
    alignItems: "center",
    alignSelf: "center",
    width: 190,
    height: 70,
    marginLeft: 15
  },
  NewList: {
    borderRadius: 10,

    width: 190,
    height: 90
  },
  ListItemText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "white",
    alignSelf: "center",
    width: 190,
    marginTop: 20
  }
});

export { _styles };
