import React, { Component } from 'react'
import { View, Text,Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import LOGO from '../../MainPage/TodayPage/icons/LOGO.png'
import { getweatherByID } from '../../Actions/wthyActions'
export class DrawerMenuMainView extends Component {

  renderLocations(){
    if (this.props.cardWeather){
      let {cardWeather} = this.props;
      let citynames = cardWeather.map(weather =>(
        <Text onPress={()=>{
          this.props.getweatherByID(weather.city.id),
          Actions.MainPageView()
        }} style={{fontSize:20,paddingBottom:10,paddingTop:5}} >{weather.city.name},{weather.city.country}</Text>
      ))
      return(
        <View>
          {citynames}
        </View>
      )
  }}
 

  render() {
    return (
      <View style={{backgroundColor:'white',height:'100%'}} >

        <View style={{height:'20%',borderBottomWidth:2,borderBottomColor:'#333333',}} >
            <Image source={LOGO} style={{width:300,height:100,marginTop:20,paddingBottom:40,marginLeft:10}} />
        </View>

<View>
        <View   style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:2,borderBottomColor:'gray',marginTop:10}} >

        <View>
            <Text style={{fontSize:20,fontWeight:'900'}} >Locations</Text>
            {this.renderLocations()}

            </View>
            <Icon onPress={()=>Actions.SearchPage()} name='edit' style={{marginTop:5,paddingBottom:5}} size={25} />
            </View  >


            </View>
            <View style={{marginTop:60,height:'10%',justifyContent:'space-between'}} >
            <Text onPress={()=>Actions.PrivacyPolicyView()} style={{fontSize:20,fontWeight:'900'}} >Privacy Policy</Text>
            <Text onPress={()=>Actions.HelpPageView()} style={{fontSize:20,fontWeight:'900'}} >Help</Text>

                
            </View>

        


</View>
    )
  }
}





const mapStateToProps = (state) => ({

  cardWeather: state.Auth.cardWeather
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, {getweatherByID})(DrawerMenuMainView)
