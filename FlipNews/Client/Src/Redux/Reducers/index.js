import { combineReducers } from "redux";

import Reporterr_Reducer from "./Reporterr_Reducer";
import FlipNews_Auth_Reducer from "./FlipNews_Auth_Reducer";

export default combineReducers({
  Reporterr: Reporterr_Reducer,
  FlipAuth: FlipNews_Auth_Reducer
});
