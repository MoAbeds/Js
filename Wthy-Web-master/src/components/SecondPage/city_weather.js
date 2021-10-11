import React, { Component } from 'react'
import { connect } from 'react-redux';
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import WeeklyWeather from './weeklyweather';
import cube from '../../icons/cube.svg';
import { switchCode } from './switch_weather_codes';
import './Style.css';
 class CityWeather extends Component {
      

  render() {
    return (
        <div>

      <div className="containerbig">
       {this.renderweather()}
        
        <div>

        </div>
        </div>  
      </div>
    )
  }
 /*  here we will render the weather on the big card */

  renderweather(){
    const {activeWeather} = this.props;
    let cityName;
    let citycountry;
    let tempToday;
    let TempDescToday;
    let TempHumidityToday;
    let TempWindSpeedToday;
    
    
    /* will check if the props is active or not (if not we will render loading cube) ,(if active we will start the rendering )*/

     if (!this.props.activeWeather || !this.props.activeWeather.city || this.props.activeWeather.city.length === 0) {
       return <img src={cube} className="cubeloading" alt="cube"/>
    }
    
    else{
        
            cityName = activeWeather.city.name;
            citycountry = activeWeather.city.country;
            tempToday = activeWeather.list[0].main.temp.toFixed();
            TempDescToday = activeWeather.list[0].weather[0].description;
            TempHumidityToday = activeWeather.list[0].main.humidity;
            TempWindSpeedToday = activeWeather.list[0].wind.speed.toFixed();
            /* here to will check the state for the toggle if its true or false */
            if(this.props.changeStyle){

            return(
        
                <React.Fragment>
                <div className="bigcardheaderdiv">
                    <div className="tempheader">
                   
                        <h2>{tempToday}°</h2>
                        <h4>{TempDescToday}</h4>
                       
                        <div className="fullheaderwh">
                        <div className="humiditydiv">
                        <h5>HUMIDITY</h5>
                        <p>{TempHumidityToday}%</p>
                        </div>
                        <div className="windspeeddiv">
                        <h5>WIND</h5>
                        <p>{TempWindSpeedToday}K/M</p>
                        </div>
                        </div>
                        
                    </div>
                   <h4 className="citynamebigcard">{cityName},{citycountry}</h4>
                   </div>
                   <div className="secondboxcolum">
                   <div className="bigcardweatherdata">
                   <WeeklyWeather/>
        
                   </div> 
                   <div className="twitterhash">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="usatodayweather"
                        options={{height: 360, width:360}}
        
                        />
                   </div>
                   </div>
                   </React.Fragment>
                
                
            )

           }else{
                return(
                    <React.Fragment>
                <div className="bigcardheaderdivnew">
                    <div className="tempheadernew">
                        <div className="weathericonnew" >{switchCode(activeWeather.list[0].weather[0].id)}</div>
                        <h2>{tempToday}°</h2>
                        <h4>{TempDescToday}</h4>
                       </div>
                   <h4 className="citynamebigcardnew">{cityName}</h4>
                   </div>
                   <div className="secondboxcolum">
                   <div className="bigcardweatherdata">
                   <WeeklyWeather/>
        
                   </div>
                   <div className="twitterhash">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="usatodayweather"
                        options={{height: 360, width:360}}
        
                        />
                   </div>
                   </div>
                   </React.Fragment>
                )

           }
     
    }
    
    
    
    
    
 }
}


const mapStateToProps = state => ({
    activeWeather: state.weather.activeWeather,
    changeStyle: state.weather.changeStyle
})


export default connect(mapStateToProps)(CityWeather);