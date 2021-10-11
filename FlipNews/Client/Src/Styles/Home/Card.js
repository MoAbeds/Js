import { StyleSheet } from "react-native";

const _styles = StyleSheet.create({
  SliderBG: {
    height: "100%",
    width: "90%",
    borderRadius: 15
  },
  SliderViewCont: {
    borderRadius: 15,
    height: 160,
    width: "90%",
    backgroundColor: "#293551",
    marginTop: 160,
    marginLeft: -30,
    alignSelf: "center"
  },
  SliderTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "900",
    width: "95%",
    marginTop: 10,
    height: 40
  },
  SliderDesc: {
    color: "white",
    marginTop: 25,
    width: "95%",
    height: 100
  },
  Container: {
    width: 100,
    height: 350,
    marginLeft: 30,
    marginTop: 25
  },
  CarouselcontainerCustomStyle: {
    flex: 1,
    marginTop: 35
  },
  CarouselSlideStyle: {
    borderRadius: 15
  },
  Spinner: {
    marginTop: 20
  }
});

export { _styles };
