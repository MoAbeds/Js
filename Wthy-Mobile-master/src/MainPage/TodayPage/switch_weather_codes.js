import React from 'react';
import {StyleSheet,View,TextInput,Dimensions,Text,ImageBackground,TouchableHighlight,Image,TouchableOpacity } from 'react-native'
import storm from './icons/storm.png';
import rain from './icons/rain.png';
import snow from './icons/snow.png';
import sun from './icons/sun.png';
import sunwithcloud from './icons/sunwithcloud.png';
import cloud from './icons/cloud.png';

/* here will switch the weathericon from the api call then render the image */ 

export function switchCode (id){
    switch(id){
        case 110:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232: 
         return <Image source={storm} style={{width:110,height:110,}}/>
           
   
         case 110:
         case 301:
         case 302:
         case 310:
         case 311:
         case 312:
         case 313:
         case 314:
         case 321:
         return <Image source={rain} style={{width:110,height:110,}}/>
           
   
         case 500:
         case 501:
         case 502:
         case 503:
         case 504:
         return <Image source={rain} style={{width:110,height:110,}}/>
         case 511:
         case 520:
         case 521:
         case 522:
         case 531:
         return <Image source={rain} style={{width:110,height:110,}}/>
             
   
         case 600:
         case 601:
         case 602:
         case 611:
         case 612:
         case 615:
         case 616:
         case 620:
         case 621:
         case 622:
         return <Image style={{width:110,height:110,}} source={snow} alt="snow"/>
             
   
         case 701:
         case 711:
         case 721:
         case 731:
         case 741:
         case 751:
         case 761:
         case 762:
         case 771:
         case 781:
         return <Image style={{width:110,height:110,}} source={sun}  />
           
   
         case 800:
         return <Image style={{width:110,height:110,}} source={sun} />
          
   
         case 801:
         return <Image style={{width:110,height:110,}} source={sunwithcloud} />

         case 802:
         return <Image source={cloud} style={{width:110,height:110,}}/>

         case 803:
         case 804:
         return <Image source={cloud} style={{width:110,height:110,}}/>
           
   
      }
}