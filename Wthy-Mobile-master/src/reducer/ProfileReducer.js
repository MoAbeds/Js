import { FETCH_PROFILE } from '../Actions/types'

const initialState = {
    Profile: null,
};


export default function(state=initialState,action){
    
    switch (action.type){
        case FETCH_PROFILE: 
        return {
          ...state,
          Profile: action.payload

        }

        default: 
        return state;
        
        
        
        
        
        
        
        
        
        }}