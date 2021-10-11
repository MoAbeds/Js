import React, { Component } from 'react'
import { connect } from 'react-redux';
import {switchCode} from './switch_weather_codes';

 class WeeklyWeather extends Component {
    weeklyweather(){
        const {activeWeather} = this.props;
        
        let tempmonday;
        let TempDescmonday;
        let weathericonmonday;
        let temtue;
        let TempDesctue;
        let weathericontue;
        let temwed;
        let TempDescwed;
        let weathericonwed;
        let temthu;
        let TempDescthu;
        let weathericonthu;
        let temfri;
        let TempDescfri;
        let weathericonfri;

        
        
    
         if (!this.props.activeWeather || !this.props.activeWeather.city || this.props.activeWeather.city.length === 0) {
            return null;
        }
        
        else{   
                //mondayweater
                tempmonday = activeWeather.list[3].main.temp.toFixed();
                TempDescmonday = activeWeather.list[3].weather[0].description;
                weathericonmonday = activeWeather.list[3].weather[0].id;
                //TUE DAY
                temtue = activeWeather.list[6].main.temp.toFixed();
                TempDesctue = activeWeather.list[6].weather[0].description;
                weathericontue = activeWeather.list[6].weather[0].id;
                //WED DAY
                temwed = activeWeather.list[12].main.temp.toFixed();
                TempDescwed = activeWeather.list[12].weather[0].description;
                weathericonwed = activeWeather.list[12].weather[0].id;
                //THU DAY
                temthu = activeWeather.list[15].main.temp.toFixed();
                TempDescthu = activeWeather.list[15].weather[0].description;
                weathericonthu = activeWeather.list[15].weather[0].id;
                //FRI DAY
                temfri = activeWeather.list[18].main.temp.toFixed();
                TempDescfri = activeWeather.list[18].weather[0].description;
                weathericonfri = activeWeather.list[18].weather[0].id;                
        }
        return(
            <div className="weatherdaysdiv">
              <div className="mondaydiv">
                <h3>MON</h3>
                <div className="mondayweatherdiv">{switchCode(weathericonmonday)}</div>
                <h5>{tempmonday}°</h5>
                <p>{TempDescmonday}</p>
              </div>
            
              <div className="tuedaydiv">
                <h3>TUE</h3>
                <div className="tueweatherdiv">{switchCode(weathericontue)}</div>
                <h5>{temtue}°</h5>
                <p>{TempDesctue}</p>
              </div>
              <div className="weddaydiv">
                <h3>WED</h3>
                <div className="wedweatherdiv">{switchCode(weathericonwed)}</div>
                <h5>{temwed}°</h5>
                <p>{TempDescwed}</p>
              </div>
              <div className="thudaydiv">
                <h3>THU</h3>
                <div className="thuweatherdiv">{switchCode(weathericonthu)}</div>
                <h5>{temthu}°</h5>
                <p>{TempDescthu}</p>
              </div>
              <div className="fridaydiv">
                <h3>FRI</h3>
                <div className="friweatherdiv" >{switchCode(weathericonfri)}</div>
                <h5>{temfri}°</h5>
                <p>{TempDescfri}</p>
              </div>
            </div>
        )
        
    }    

  render() {
    return (
      <div className="weeklyweatherdiv">
        {this.weeklyweather()}
      </div>
    )
  }
}



const mapStateToProps = state => ({
    activeWeather: state.weather.activeWeather
})


export default connect(mapStateToProps)(WeeklyWeather);