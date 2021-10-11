import React, { PureComponent } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SwipeRow } from "react-native-swipe-list-view";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Slider from "react-native-slider";
import { TodoCard as styles } from "../../Styles";
import { DeleteTodo } from "../../Redux/Action/MainActions";
import Empty from "../../../assets/Empty.png";
export class TodoCard extends PureComponent {
  static propTypes = {
    prop: PropTypes,
    Todos: PropTypes.array.isRequired,
    DeleteTodo: PropTypes.func.isRequired
  };

  RenderUrgentTask() {
    let { Todos, DeleteTodo } = this.props;

    return Todos.map((item, index) => {
      let SliderV = item.SliderValue;
      if (SliderV === 10) {
        return (
          <View style={styles.Container}>
            <SwipeRow leftOpenValue={75} rightOpenValue={-75}>
              <View style={styles.standaloneRowBack}>
                <TouchableWithoutFeedback>
                  <View style={styles.LeftBtnCheck}>
                    <AntDesign
                      style={styles.CheckIcon}
                      name="check"
                      size={30}
                      color="white"
                    />
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => DeleteTodo(index)}>
                  <View style={styles.RightBtnCheck}>
                    <AntDesign
                      style={styles.DeleteIcon}
                      name="delete"
                      size={30}
                      color="white"
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <LinearGradient
                colors={["#fc4a1a", "#FEA896"]}
                style={styles.standaloneRowFront}
              >
                <Text style={styles.Title}>{item.Title}</Text>
                <Text style={styles.RadioValue}>{item.RadioLabel}</Text>
                <Entypo
                  color="white"
                  name="dots-three-vertical"
                  size={17}
                  style={styles.ThreeDotsIcon}
                />
                <View style={styles.SliderContainer}>
                  <Slider
                    disabled
                    style={{ width: "50%" }}
                    trackStyle={styles.track}
                    thumbStyle={styles.thumb}
                    value={item.SliderValue}
                    minimumTrackTintColor="white"
                  />
                </View>
                <Text style={styles.Time}>{item.Time}</Text>
              </LinearGradient>
            </SwipeRow>
          </View>
        );
      } else {
        return null;
      }
    });
  }

  RenderTasks = () => {
    let { Todos, DeleteTodo } = this.props;

    return Todos.map((item, index) => {
      let SliderV = item.SliderValue;
      if (SliderV === 10) {
        return null;
      } else {
        const Cond = item.SliderValue;
        let NewObj = {
          colors:
            Cond <= 3
              ? ["#00B4DB", "#0083B0"]
              : Cond <= 5
              ? ["#11998e", "#38ef7d"]
              : Cond <= 9
              ? ["#ff00cc", "#333399"]
              : ""
        };

        let LineColors = {
          colors:
            Cond <= 3
              ? ["#ff00cc", "#333399"]
              : Cond <= 5
              ? ["#00B4DB", "#0083B0"]
              : Cond <= 9
              ? ["#11998e", "#38ef7d"]
              : ""
        };

        return (
          <View style={styles.Container}>
            <LinearGradient
              colors={LineColors.colors}
              style={styles.StandLine}
            />
            <SwipeRow
              style={{ marginLeft: 25 }}
              leftOpenValue={75}
              rightOpenValue={-75}
            >
              <View style={styles.standaloneRowBack}>
                <TouchableWithoutFeedback>
                  <View style={styles.LeftBtnCheck}>
                    <AntDesign
                      style={styles.CheckIcon}
                      name="check"
                      size={30}
                      color="white"
                    />
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => DeleteTodo(index)}>
                  <View style={styles.RightBtnCheck}>
                    <AntDesign
                      style={styles.DeleteIcon}
                      name="delete"
                      size={30}
                      color="white"
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <LinearGradient
                colors={NewObj.colors}
                style={styles.standaloneRowFront}
              >
                <Text style={styles.Title}>{item.Title}</Text>
                <Text style={styles.RadioValue}>{item.RadioLabel}</Text>
                <Entypo
                  color="white"
                  name="dots-three-vertical"
                  size={17}
                  style={styles.ThreeDotsIcon}
                />
                <View style={styles.SliderContainer}>
                  <Slider
                    disabled
                    style={{ width: "50%" }}
                    trackStyle={styles.track}
                    thumbStyle={styles.thumb}
                    value={item.SliderValue}
                    minimumTrackTintColor="white"
                  />
                </View>
                <Text style={styles.Time}>{item.Time}</Text>
              </LinearGradient>
            </SwipeRow>
          </View>
        );
      }
    });
  };

  RenderIf_Todos_Av() {
    let { Todos } = this.props;
    if (Todos.length === 0) {
      return (
        <View style={{ alignSelf: "center", marginTop: 70 }}>
          <Text
            style={{
              fontSize: 25,
              color: "#AA154E",
              fontFamily: "Roboto",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            There is no any {"\n"} Tasks Start by adding Tasks
          </Text>
          <Image source={Empty} style={{ height: 200, width: 290 }} />
        </View>
      );
    } else {
      return (
        <View>
          <View style={{ marginTop: -50 }}>
            <Text style={styles.UrgentText}>Urgent tasks</Text>
            {this.RenderUrgentTask()}
          </View>

          <View style={{ marginTop: 60 }}>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <LinearGradient
                colors={["#E97295", "#AA154E"]}
                style={styles.CircleFirst}
              />
              <Text style={styles.OthersText}>Other Tasks Today</Text>
            </View>
            {this.RenderTasks()}
          </View>
          <View style={{ marginLeft: 10, marginTop: 2 }}>
            <LinearGradient
              colors={["#00B4DB", "#0083B0"]}
              style={styles.CircleSec}
            />
          </View>
        </View>
      );
    }
  }

  render() {
    return <View>{this.RenderIf_Todos_Av()}</View>;
  }
}

const mapStateToProps = state => ({
  Todos: state.ChampionMain.Todos
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { DeleteTodo }
)(TodoCard);
