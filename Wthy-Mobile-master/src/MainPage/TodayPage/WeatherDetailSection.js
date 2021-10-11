import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { switchCodeBlack } from './switch_weather_codes_black'

export class WeatherDetailView extends Component {


    renderDetailView(){
        if (this.props.weather){
            let {weather} = this.props;
            return(
                <View style={{width:'95%',backgroundColor:'#333333',marginLeft:10,height:150,marginTop:20,borderRadius:5}} >
                <Text style={{fontSize:20,color:'white',marginTop:10,paddingBottom:10,borderBottomWidth:1,borderBottomColor:'white',paddingLeft:10}} >Detail</Text>
     
             <View style={{width:'80%',flexDirection:'row',marginTop:10,marginLeft:35,justifyContent:'space-between'}} >
               <Text style={{fontSize:15,color:'white'}} >MORN</Text>
               <Text style={{fontSize:15,color:'white'}} >NOON</Text>
               <Text style={{fontSize:15,color:'white'}} >EVEN</Text>
               <Text style={{fontSize:15,color:'white'}} >NIGH</Text>
             </View>
     
             
             <View style={{width:'80%',flexDirection:'row',marginTop:15,marginLeft:15,justifyContent:'space-between'}} >
     
               {/** MORNING WEATHER */}
     
               <View style={{flexDirection:'row'}}>
                 <Text style={{color:'white',fontSize:25,paddingRight:5}} >{weather[0].list[0].main.temp.toFixed()}°</Text>
                 {switchCodeBlack(this.props.weather[0].list[1].weather[0].id)}
               </View>
     
     
               {/** NOON WEATHER */}
     
               <View style={{flexDirection:'row',marginLeft:20}}>
                 <Text style={{color:'white',fontSize:25,paddingRight:5}} >{weather[0].list[0].main.temp.toFixed()}°</Text>
                 {switchCodeBlack(this.props.weather[0].list[2].weather[0].id)}
               </View>
     
     
                {/** EVENING WEATHER */}
     
                <View style={{flexDirection:'row',marginLeft:20}}>
                 <Text style={{color:'white',fontSize:25,paddingRight:5}} >{weather[0].list[0].main.temp.toFixed()}°</Text>
                 {switchCodeBlack(this.props.weather[0].list[3].weather[0].id)}
               </View>
     
     
               {/** NIGHT WEATHER */}
     
               <View style={{flexDirection:'row',marginLeft:20}}>
                 <Text style={{color:'white',fontSize:25,paddingRight:5}} >{weather[0].list[0].main.temp.toFixed()}°</Text>
                 {switchCodeBlack(this.props.weather[0].list[4].weather[0].id)}
               </View>
     
     
     
     
               
             </View>
     
     
     
              </View>
            )
    }

}
  

  render() {
    return (
      <View>
          {this.renderDetailView()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    weather: state.Auth.weather
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetailView)
