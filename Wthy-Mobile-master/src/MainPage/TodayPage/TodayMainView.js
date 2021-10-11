import React, { Component } from 'react'
import { View, Text,Image,ScrollView,Dimensions  } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WeatherDetailView from './WeatherDetailSection'
import HourlySection from './HourlySection'
import ExtendedSection from './ExtendedSection'
import RenderSubData from './RenderSubData'
import RenderMainWeatherData from './RenderMainWeatherData'
const {height} = Dimensions.get('window');


export class TodayMainView extends Component {

  state={
    screenHeight: 0,
  }

  onContentSizeChange = (contentWidth,contentHeight) => {
    this.setState({
      screenHeight: contentHeight

    })
  }

  

  renderFullToDayPage(){
    const scrollEnabled = this.state.screenHeight > height;

    if (this.props.weather){
      return(
        <ScrollView
        scrollEnabled={scrollEnabled}
        onContentSizeChange={this.onContentSizeChange}
        >

        {/** Render Main Weather Data */}
        <RenderMainWeatherData/>

       

        {/** Sub Data weather data */}
        <RenderSubData/>
       


        {/** detail section  */}
        <WeatherDetailView/>


        {/** hourly section */}
        <HourlySection/>


        {/** extended section  */}
        <ExtendedSection/>







      </ScrollView>

      )
    }else{
      return (
        <View>
                    

        </View>
      )
    }
  }

  render() {
    return (
      <View>
{this.renderFullToDayPage()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({

  weather: state.Auth.weather
  
})



export default connect(mapStateToProps)(TodayMainView)
