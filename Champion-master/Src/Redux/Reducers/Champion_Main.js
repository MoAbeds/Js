import { SHOW_OVERLAY, CREATE_TODO, DELETE_TODO } from "../Action/types";

const initialState = {
  ShowOverLay: false,
  RadioArr: [
    { label: "Work", value: 0 },
    { label: "Lifestyle", value: 1 },
    { label: "Family", value: 2 },
    { label: "Health", value: 3 },
    { label: "Friends", value: 4 }
  ],
  Todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_OVERLAY:
      return {
        ...state,
        ShowOverLay: !state.ShowOverLay
      };

    case CREATE_TODO:
      return {
        ...state,
        Todos: [action.payload, ...state.Todos]
      };

    case DELETE_TODO:
      return {
        ...state,

        Todos: state.Todos.filter((Todo, index) => index !== action.payload)
      };

    default:
      return state;
  }
}
