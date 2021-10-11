import { combineReducers } from 'redux';

import RecipeReducer from './rec_reducer';


export default combineReducers({
    recipe: RecipeReducer
});