import {GET_WEATHER,GET_WEATHER_BY_ID,GET_WEATHER_BY_ZIP,Change_Style} from './types';
import axios from 'axios';

const API_KEY = 'f827cf65d703d03250289556685302e4';


export function getweather  ({city,country}){
             
              
          
    const res =  axios.get (`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}&q=${city},${country}&units=metric&cnt=30`).then(res=>{
      const data = res.data;
      
      return data;
  })    
            return({
                   type: GET_WEATHER,
                   payload: res
               })
        }

        

export function getweatherByID(id){
   
    

    const res =  axios.get (`http://api.openweathermap.org/data/2.5/forecast/?id=${id}&APPID=${API_KEY}&units=metric`).then(res=>{
        const data = res.data;
        
        return data;
    })
    
       
    return({
           type: GET_WEATHER_BY_ID,
           payload: res
       })
}
export function getweatherByZIP(ZIP){
   
    

    const res =  axios.get (`http://api.openweathermap.org/data/2.5//weather?zip=${ZIP},us&APPID=${API_KEY}&units=metric`).then(res=>{
        const data = res.data;
        
        return data;
    })
    
       
    return({
           type: GET_WEATHER_BY_ZIP,
           payload: res
       })
}

export function changestyle(state) {
    return function (dispatch){
        dispatch ({
            type : Change_Style,
            state
        })
    }
    
   
    
    
}
