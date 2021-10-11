import { combineReducers } from 'redux';

import timeReducer from './timeMang';


export default combineReducers({
    time: timeReducer
});
