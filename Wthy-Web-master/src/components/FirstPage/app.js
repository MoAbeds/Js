import React, { Component } from 'react'
import WeatherList from './weather_list';
import SearchForm from './search_form';

export default class app extends Component {
  render() {
    return (
<React.Fragment>

 
<div className="searchformcontainer" >

        <SearchForm/>
        </div>
        <div className="weatherListContainer" >

          <WeatherList/>
          </div>
          </React.Fragment>

     
 );
    
     }
}
