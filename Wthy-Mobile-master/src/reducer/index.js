import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer'
import ProfileReducer from './ProfileReducer'
import WeatherReducer from './WeatherReducer'
export default combineReducers({
    Auth: AuthReducer,
    Weather: WeatherReducer,
});
