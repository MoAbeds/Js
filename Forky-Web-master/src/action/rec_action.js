import { GET_RECIPE,GET_RECIPES,GET_ING,GET_LOVED_RECIPE,LOVED_TO_BIGCARD } from './types';
import axios from 'axios';


   

   export function getRecipes  (recName){
   

    const res =  axios.get (`https://api.edamam.com/search?q=${recName}&app_id=0f19eb37&app_key=50fc1919dd9b8a8af076e07258fdbdd6&to=30`
    ).then(res => {
        const data = res.data.hits;
        return data;})
    
       
    return({
           type: GET_RECIPES,
           payload: res
       })
}


export function getRecipe(state) {
  
    return ({
      type : GET_RECIPE,
        payload: state
     })}
         


//ADD ING 

export function ADDING(state) {
    return function (dispatch){
        dispatch ({
         type : GET_ING,
                     state
        })
            }}





 export function LovedRec(state) {
return function (dispatch){
    dispatch ({
     type : GET_LOVED_RECIPE,
              state
        })
             }}
            
            



    export function LovedToMain(state) {
        return function (dispatch){
            dispatch ({
                type : LOVED_TO_BIGCARD,
                payload: state

                        })
                             }}
                            