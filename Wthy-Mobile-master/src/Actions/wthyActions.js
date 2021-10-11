import { 
    GET_WEATHER,GET_WEATHER_TODAY,
    GET_WEATHER_BY_ID,SHOW_MENU,
   } from './types'



   import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';




export function ShowMenu(state) {
  return function (dispatch){
      dispatch ({
          type : SHOW_MENU,
          state
      })
  }
  
 
  
  
}







 /** get weather by name */


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