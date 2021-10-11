import React from 'react';
import {Image} from 'react-native'
import storm from './iconBlack/storm.png';
import rain from './iconBlack/rain.png';
import snow from './iconBlack/snow.png';
import sun from './iconBlack/sun.png';
import sunwithcloud from './iconBlack/sunwithcloud.png';
import cloud from './iconBlack/cloud.png';

/* here will switch the weathericon from the api call then render the image */ 

export function switchCodeBlack (id){
    switch(id){
        case 40:
        case 401:
        case 402:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232: 
         return <Image source={storm} style={{width:40,height:40,}}/>
           
   
         case 40:
         case 301:
         case 302:
         case 310:
         case 311:
         case 312:
         case 313:
         case 314:
         case 321:
         return <Image source={rain} style={{width:40,height:40,}}/>
           
   
         case 400:
         case 401:
         case 402:
         case 403:
         case 404:
         return <Image source={rain} style={{width:40,height:40,}}/>
         case 511:
         case 540:
         case 521:
         case 522:
         case 531:
         return <Image source={rain} style={{width:40,height:40,}}/>
             
   
         case 600:
         case 601:
         case 602:
         case 611:
         case 612:
         case 615:
         case 616:
         case 640:
         case 621:
         case 622:
         return <Image style={{width:40,height:40,}} source={snow} alt="snow"/>
             
   
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
         return <Image style={{width:40,height:40,}} source={sun}  />
           
   
         case 800:
         return <Image style={{width:40,height:40,}} source={sun} />
          
   
         case 801:
         return <Image style={{width:40,height:40,}} source={sunwithcloud} />

         case 802:
         return <Image source={cloud} style={{width:40,height:40,}}/>

         case 803:
         case 804:
         return <Image source={cloud} style={{width:40,height:40,}}/>
           
   
      }
}