import {GET_WEATHER,SHOW_MENU} from '../Actions/wthyActions';


const initialState = {
    weather: [],
    ShowMenu: false
};



export default function(state=initialState,action){
    
    switch (action.type){
        case GET_WEATHER:
            return {
                
                weather: [action.payload,...state.weather]

            }


        case SHOW_MENU:
        return {
            ...state,
            ShowMenu:!state.ShowMenu
        }

        default:
        return state
        
        
        
        
        
        
        
        
        
        }}