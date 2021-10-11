import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import {H1,H2,Header,Left,Body,Container,Item,Input,Right,Form,Picker,Drawer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getweather } from '../../Actions/wthyActions';
import DrawerMenuMainView from './DrawerMenuMainView'

export class SearchPageView extends Component {
    state = {
        selected: "US",
        SearchWeatherValue:'',
        MenuOpen: false
      };

 

  render() {
    return (
      <Drawer content={<DrawerMenuMainView/>} acceptTap={true} open={this.state.MenuOpen}  tapToClose={true} >

      <Container>

          <Header rounded searchBar style={{backgroundColor:'#333333'}} androidStatusBarColor="#333333" >


          <Left>
            <Icon color='white' onPress={()=>this.setState({
              MenuOpen: true
            })}    size={20} name='bars' />
          </Left>



          <Body style={{marginRight:160}} >

          

            <Item>
            <Icon name="search" size={20} color='white' />
            <Input 

                    value={this.state.SearchWeatherValue}
                    onChangeText={(SearchWeatherValue)=>this.setState({
                        SearchWeatherValue
                    })}

                    onSubmitEditing={()=>{this.props.getweather({
                        city: this.state.SearchWeatherValue,
                        country:this.state.selected
                    }
                    ),this.setState({
                        SearchWeatherValue:''
                    }) }} 

             style={{color:'white',}} placeholder="Search Locations" />
          </Item>

            </Body>


          </Header>

          <Form style={{width:'30%',marginLeft:280,marginTop:-50}} >

          <Picker 
          textStyle={{fontSize:40}}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              headerBackButtonText="Baaack!"
              selectedValue={this.state.selected}
              onValueChange={(value)=>this.setState({
                 selected: value
              })}>

              <Picker.Item  label="USA" value="US" />
              <Picker.Item label="Rus" value="RU" />
              <Picker.Item label="UK" value="GB" />
              <Picker.Item label="EGY" value="EG" />
              <Picker.Item label="IND" value="IN" />
            </Picker>

          </Form>

      </Container>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
  
})



export default connect(mapStateToProps, {getweather})(SearchPageView)
