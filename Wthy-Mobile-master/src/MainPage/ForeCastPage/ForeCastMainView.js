import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LineChart, YAxis, Grid, BarChart,XAxis } from 'react-native-svg-charts'
import { Container, Header, Content, Accordion } from "native-base";




export class ForeCastMainView extends Component {

    renderAllSection(){
        if (this.props.weather){
            let {weather} = this.props;
            const dataweather = weather[0].list.map(weather => weather.main.temp);
            const fill = '#333333'
            const  days =  ['w','d','dd']

    const contentInset = { top: 20, bottom: 20 }
            return(

                <View style={{marginLeft:30}} >

                    <Text style={{fontSize:30,fontWeight:'900',color:'#333333'}} >Hourly Temperature</Text>

                <View style={{ height: 200, flexDirection: 'row',width:'90%' }}>
                <YAxis
                    data={ dataweather }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={ value => `${value}ºC` }
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={ dataweather }
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={ contentInset }
                    
                >
           

                    <Grid/>
                </LineChart>
        
        
            </View>

            <View style={{width:'90%'}} >

            <Text style={{fontSize:30,fontWeight:'900',color:'#333333',paddingBottom:10}} >Weekly Temperature</Text>


            <BarChart
                style={{ height: 200 }}
                data={ dataweather }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}
            >
                <Grid/>

                <XAxis
                    data={ days }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={ value => `${value}ºC` }
                />
                
            </BarChart>
            </View>

            </View>

            )
    }

}
  
  render() {
    
    return (

        <View>
            {this.renderAllSection()}
        </View>
       
    )
  }
}

const mapStateToProps = (state) => ({

    weather: state.Auth.weather
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ForeCastMainView)
