import { SHOW_OVERLAY, CREATE_TODO, DELETE_TODO } from "./types";

export function ToggleOverLay() {
  return {
    type: SHOW_OVERLAY
  };
}

export function CreateTodo(state) {
  return {
    type: CREATE_TODO,
    payload: state
  };
}

export function DeleteTodo(state) {
  return {
    type: DELETE_TODO,
    payload: state
  };
}
