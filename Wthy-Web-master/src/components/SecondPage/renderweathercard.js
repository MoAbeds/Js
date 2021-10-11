import React, { Component } from 'react'
import CityWeather from './city_weather';
import {getweatherByID} from '../../Actions/weather_actions';
import { connect} from 'react-redux';
import back from '../../icons/back.png';
import { Link } from 'react-router-dom';


 class renderweathercard extends Component {
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getweatherByID(id);
    }
  render() {
    if(this.props.changeStyle){
      return (
        <div>
          
          <div className="renderweathercarddiv" >
          <Link to={"/"}>
          <img className="backarrow" src={back}  alt="backarrow"/>
          </Link>
              <CityWeather/>
          </div>
            
        </div>
      )
    }else{
      return(
      <div>
          
          <div className="renderweathercarddivnew">
            
            
          <Link to={"/"}>
          <img className="backarrow" src={back}  alt="backarrow"/>
          </Link>
              <CityWeather/>
          </div>
            
        </div>
      )}
    
  }
}
const mapStateToProps = state => ({
  changeStyle: state.weather.changeStyle
})
export default connect(mapStateToProps,{getweatherByID})(renderweathercard);