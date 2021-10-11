import { combineReducers } from "redux";

import WNews_Reducer from "./WNews_Reducer";
export default combineReducers({
  WNews: WNews_Reducer
});
