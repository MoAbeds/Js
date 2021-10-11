import { CREATE_TAB } from "../Action/types";

const initialState = {
  IsEngInUse: true,
  CustomTabs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_TAB:
      return {
        ...state,
        CustomTabs: [action.payload, ...state.CustomTabs]
      };
    default:
      return state;
  }
}
