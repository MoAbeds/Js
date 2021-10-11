import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class RenderSubData extends Component {

    RenderSubData(){
        if (this.props.weather){
            let {weather} = this.props;
            return(
                <View>

          <View style={{flexDirection:'row',marginLeft:15,marginTop:5,justifyContent:'space-between',width:'85%'}} >

            {/** vis data */}
            <View>
              <Text style={{fontSize:20,color:'#333333'}} >{weather[0].list[0].main.temp_kf.toFixed()} KM</Text>
              <Text style={{fontSize:14,color:'#333333'}} >VISIBILITY</Text>
            </View>


            {/** HUM data */}
            <View>
              <Text style={{fontSize:20,color:'#333333'}} >{weather[0].list[0].main.humidity.toFixed()} %</Text>
              <Text style={{fontSize:14,color:'#333333'}} >HUMIDITY</Text>
            </View>



             {/** UV INDEX data */}
             <View>
              <Text style={{fontSize:20,color:'#333333'}} >{weather[0].list[0].main.temp_min.toFixed()} Very High</Text>
              <Text style={{fontSize:14,color:'#333333'}} >UV INDEX</Text>
            </View>

          </View>


          <View style={{flexDirection:'row',marginLeft:15,marginTop:10,width:'85%'}} >

            {/** pressure data */}
            <View>
              <Text style={{fontSize:20,color:'#333333'}} >{weather[0].list[0].main.pressure}MB</Text>
              <Text style={{fontSize:14,color:'#333333'}} >PRESSURE</Text>
            </View>


            {/** DEW data */}
            <View style={{marginLeft:20}} >
              <Text style={{fontSize:20,color:'#333333'}} >{weather[0].list[0].clouds.all.toFixed()}°</Text>
              <Text style={{fontSize:14,color:'#333333'}} >DEW POINT</Text>
            </View>
          </View>
         </View>
            )
    }

}
  
  

  render() {
    return (
      <View>
          {this.RenderSubData()}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    weather: state.Auth.weather
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderSubData)
