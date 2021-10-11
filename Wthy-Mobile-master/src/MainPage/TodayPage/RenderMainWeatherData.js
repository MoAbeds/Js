import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { switchCode } from './switch_weather_codes'

export class RenderMainWeatherData extends Component {

    RenderMainData(){
        if (this.props.weather){
            let {weather} = this.props;
            return(
                <View>

                <View style={{marginTop:20,marginLeft:50}} >
                {switchCode(this.props.weather[0].list[0].weather[0].id)}
     
     
             {/** main weather and max&min temp */}
               <View style={{marginLeft:180,marginTop:-110}} >
     
                <Text style={{fontSize:40,color:'#333333'}} >{weather[0].list[0].main.temp.toFixed()}°</Text>
                <Text style={{fontSize:25,marginRight:20,color:'#333333'}} >{weather[0].list[0].weather[0].main}</Text>
     
     
               <View style={{flexDirection:'row'}} >
                   <Text style={{fontSize:20,color:'#333333'}} >{weather[0].list[0].main.temp_max.toFixed()}°/</Text>
                   <Text  style={{fontSize:20,paddingLeft:5,color:'#333333'}} >{weather[0].list[0].main.temp_min.toFixed()}°</Text>
               </View>
     
             </View>
           </View>
     
     
             <View style={{width:'95%',borderBottomWidth:2,borderBottomColor:'#333333',marginTop:20,flexDirection:'row',marginLeft:10,justifyContent:'space-between'}} >
                 {/** temp */}
               <View>
                 <Text style={{fontSize:25,color:'#333333'}} >{weather[0].list[0].main.temp.toFixed()}°</Text>
                 <Text style={{fontSize:20,color:'#333333'}} >FEELS LIKE</Text>
               </View>
     
                 {/** wind */}
               <View>
                 <Text style={{fontSize:25,color:'#333333'}} >{weather[0].list[0].wind.speed.toFixed()} {''} KM/H {''} WSW  </Text>
                 <Text style={{fontSize:20,marginLeft:110,color:'#333333'}} >WIND</Text>
               </View>
     
             </View>
             </View>
               
            )
    }

}
  

  render() {
    return (
      <View>
            
            {this.RenderMainData()}      

    </View>
    )
  }
}

const mapStateToProps = (state) => ({

    weather: state.Auth.weather
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderMainWeatherData)
