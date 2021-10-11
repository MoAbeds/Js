import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  ListItem: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 12,
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
  },
  Spinner: {
    marginTop: 20
  },
  ItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 20
  }
});

export { _styles };
