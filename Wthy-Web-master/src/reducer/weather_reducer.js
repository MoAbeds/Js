import {GET_WEATHER,GET_WEATHER_BY_ID,Change_Style} from '../Actions/types';
const initialState = {
    weather: [],
    activeWeather:{},
    changeStyle:true
};

export default function(state=initialState,action){
    
    switch (action.type){
        case GET_WEATHER:
            return {
                
                weather: [action.payload,...state.weather],
                changeStyle: state.changeStyle

            }
            
        case GET_WEATHER_BY_ID:
            return {
                ...state,
                activeWeather: action.payload
            }
            
       
        case Change_Style :
            return {
                ...state,
                changeStyle:!state.changeStyle
            }
            
        
    default :
        return state
    }
    
}




