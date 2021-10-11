import { CREATE_TAB, FETCH_NEWS, WEB_LINK } from "../Action/types";

const initialState = {
  IsEngInUse: true,
  ChoosenNews: "general",
  WebViewLink: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        ChoosenNews: action.payload
      };

    case WEB_LINK:
      return {
        ...state,
        WebViewLink: action.payload
      };

    default:
      return state;
  }
}
