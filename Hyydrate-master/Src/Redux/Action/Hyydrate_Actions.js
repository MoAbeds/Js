import {
  SHOW_CUPS_MENU,
  SHOW_CUSTOM_CUP,
  CREATE_CUP,
  CHOOSE_CUP,
  BTN_DRINK,
  SHOW_SUCC
} from "./types";

export function ToggleCupsMenu() {
  return {
    type: SHOW_CUPS_MENU
  };
}

export function ToggleCustomMenu() {
  return {
    type: SHOW_CUSTOM_CUP
  };
}

export function CreateCustomCup(state) {
  return {
    type: CREATE_CUP,
    payload: state
  };
}

export function ChooseCup(state) {
  return {
    type: CHOOSE_CUP,
    payload: state
  };
}

export function DrinkWater(state) {
  return {
    type: BTN_DRINK,
    payload: state
  };
}

export function ToggleSUCCMenu() {
  return {
    type: SHOW_SUCC
  };
}
