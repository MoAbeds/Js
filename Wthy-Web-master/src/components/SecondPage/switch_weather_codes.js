import React from 'react';
import storm from '../../icons/storm.svg';
import cloudywithrain from '../../icons/cloudywithrain.svg';
import sunwithcloudwithrain from '../../icons/sunwithcloudwithrain.svg';
import snow from '../../icons/snow.svg';
import mist from '../../icons/mist.png';
import day from '../../icons/day.svg';
import sunwithcloud from '../../icons/sunwithcloud.svg';
import cloudy from '../../icons/cloudy.svg';

/* here will switch the weathericon from the api call then render the image */ 

export function switchCode (id){
    switch(id){
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232: 
         return <img src={storm}  alt="storm"/>
           
   
         case 300:
         case 301:
         case 302:
         case 310:
         case 311:
         case 312:
         case 313:
         case 314:
         case 321:
         return <img src={cloudywithrain}  alt="cloudywithrain"/>
           
   
         case 500:
         case 501:
         case 502:
         case 503:
         case 504:
         return <img src={sunwithcloudwithrain}  alt="sunwithcloudwithrain"/>
         case 511:
         case 520:
         case 521:
         case 522:
         case 531:
         return <img src={cloudywithrain} alt="cloudy"/>
             
   
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
         return <img src={snow}  alt="snow"/>
             
   
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
         return <img src={mist} alt="mist"/>
           
   
         case 800:
         return <img src={day}  alt="sunny"/>
          
   
         case 801:
         return <img src={sunwithcloud}  alt="sunwithcloud"/>

         case 802:
         return <img src={cloudy}  alt="cloud"/>

         case 803:
         case 804:
         return <img src={cloudy}  alt="brokenclouds"/>
           
   
      }
}