import {
  SHOW_CUPS_MENU,
  SHOW_CUSTOM_CUP,
  CREATE_CUP,
  CHOOSE_CUP,
  BTN_DRINK,
  SHOW_SUCC
} from "../Action/types";

const initialState = {
  ShowOverLayCups: false,
  ShowCustomMenu: false,
  ShowSuccPage: false,
  CustomCups: ["200", "500", "900"],
  ChosenCup: 300,
  Weight: "70",
  WaterValue: "2320",
  DrinkedWater: 0,
  DrinkedValues: [300]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_CUPS_MENU:
      return {
        ...state,
        ShowOverLayCups: !state.ShowOverLayCups
      };

    case SHOW_CUSTOM_CUP:
      return {
        ...state,
        ShowCustomMenu: !state.ShowCustomMenu
      };

    case SHOW_SUCC:
      return {
        ...state,
        ShowSuccPage: !state.ShowSuccPage
      };

    case CREATE_CUP:
      return {
        ...state,
        CustomCups: [action.payload, ...state.CustomCups]
      };

    case CHOOSE_CUP:
      return {
        ...state,
        ChosenCup: action.payload
      };

    case BTN_DRINK:
      return {
        ...state,
        DrinkedWater: action.payload + state.DrinkedWater,
        DrinkedValues: [action.payload, ...state.DrinkedValues]
      };

    default:
      return state;
  }
}
