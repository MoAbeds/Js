import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import OverLayForm from "../OverLayForm";
import DateTimePicker from "react-native-modal-datetime-picker";
import RadioButtons from "./RadioButton";
import Slider from "react-native-slider";
import { Button, Textarea } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { CreateTodo, ToggleOverLay } from "../../Redux/Action/MainActions";
import { OverLayCompoenents as _styles } from "../../Styles";
export class OverLayCompoenents extends Component {
  state = {
    Title: "",
    Desc: "",
    selectedTime: new Date(),
    isDateTimePickerVisible: false,
    Date: new Date(),
    SliderValue: 5,
    ToggleDesc: false,
    RadioValue: 0,
    RadioLabel: ""
  };

  static propTypes = {
    prop: PropTypes,
    CreateTodo: PropTypes.func.isRequired,
    ToggleOverLay: PropTypes.func.isRequired,
    ShowOverLay: PropTypes.bool.isRequired,
    RadioArr: PropTypes.array.isRequired
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = time => {
    this.setState({ selectedTime: time });
    this.hideDateTimePicker();
  };

  OnSubmitPressed() {
    let {
      RadioValue,
      SliderValue,
      Title,
      selectedTime,
      Desc,
      RadioLabel
    } = this.state;
    let { CreateTodo, ToggleOverLay } = this.props;
    let Time = `${selectedTime.getHours() % 12} ${
      selectedTime.getHours() >= 12 ? "pm" : "am"
    }`;

    if (Title === "") {
      return null;
    }

    CreateTodo({
      RadioLabel,
      SliderValue,
      Title,
      Time,
      Desc
    });

    ToggleOverLay();

    this.setState({
      Title: "",
      Desc: "",
      selectedTime: new Date(),
      isDateTimePickerVisible: false,
      Date: new Date(),
      SliderValue: 5,
      ToggleDesc: false,
      RadioValue: 0,
      RadioLabel: ""
    });
  }

  render() {
    let { RadioArr, ShowOverLay, ToggleOverLay } = this.props;
    let { selectedTime, ToggleDesc, RadioValue, SliderValue } = this.state;
    return (
      <OverLayForm
        FormSty={{ marginTop: 90 }}
        Style={{ height: "100%" }}
        IsOpen={ShowOverLay}
        OnOverLayPressed={() => ToggleOverLay()}
      >
        <TextInput
          value={this.state.Title}
          onChangeText={e => this.setState({ Title: e })}
          placeholderTextColor="black"
          placeholder="Add a Title"
          style={_styles.TitleInput}
        />

        <View style={{ paddingBottom: 20 }}>
          <Text style={_styles.WhenText}>When ?</Text>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            mode={"time"}
            is24Hour={false}
            date={this.state.Date}
            onConfirm={date => this.handleDatePicked(date)}
            onCancel={() => this.hideDateTimePicker()}
          />
          <Button
            transparent
            style={_styles.ClockBtn}
            onPress={() => this.showDateTimePicker()}
          >
            <Text style={_styles.ClockText}>
              {`${selectedTime.getHours() % 12} ${
                selectedTime.getHours() >= 12 ? "pm" : "am"
              }`}
            </Text>
          </Button>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={_styles.WhenText}>Description</Text>
              <AntDesign
                onPress={() => this.setState({ ToggleDesc: !ToggleDesc })}
                name={ToggleDesc ? "caretup" : "caretdown"}
                size={20}
                style={_styles.ToggleDescIcon}
              />
            </View>
            {ToggleDesc ? (
              <Textarea
                value={this.state.Desc}
                onChangeText={d => this.setState({ Desc: d })}
                rowSpan={5}
                style={_styles.DescContainer}
                bordered
                placeholder="Add more Info"
              />
            ) : null}
          </View>

          <Text style={_styles.WhenText}>Categorie</Text>
          <RadioButtons
            Onpressed={item => {
              this.setState({ RadioValue: item.value, RadioLabel: item.label });
            }}
            value={RadioValue}
            options={RadioArr}
          />
          <Text style={_styles.SliderText}>Importance</Text>
          <Slider
            value={SliderValue}
            minimumValue={0}
            maximumValue={10}
            onValueChange={v => this.setState({ SliderValue: v })}
            style={{ width: "50%" }}
            trackStyle={_styles.track}
            thumbStyle={_styles.thumb}
            minimumTrackTintColor="#d14ba6"
          />
          <Button
            onPress={() => this.OnSubmitPressed()}
            style={_styles.BtnContainer}
          >
            <AntDesign
              style={_styles.BtnIcon}
              name="check"
              size={30}
              color="white"
            />
          </Button>
        </View>
      </OverLayForm>
    );
  }
}

const mapStateToProps = state => ({
  RadioArr: state.ChampionMain.RadioArr,
  ShowOverLay: state.ChampionMain.ShowOverLay
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { CreateTodo, ToggleOverLay }
)(OverLayCompoenents);
