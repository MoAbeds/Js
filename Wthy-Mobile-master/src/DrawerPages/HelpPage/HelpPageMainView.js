import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {H1,H2,Header,Left,Body,Form,Button,Input,Item,Label,Drawer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerMenuMainView from './DrawerMenuMainView'

export class HelpPageMainView extends Component {
  
  state ={
    MenuOpen:false

  }

  render() {
    return (

      <Drawer  content={<DrawerMenuMainView/>} open={this.state.MenuOpen}     tapToClose={true}  >

      <View>

 <Header style={{backgroundColor:'#333333'}} androidStatusBarColor="#333333"   >
        <Left>
            <Icon color='white' onPress={()=>{this.setState({
                  MenuOpen: true
            })}}        size={20} name='bars' />
          </Left>
          <Body>
          <Text style={{fontSize:20,color:'white'}} >Help</Text>
          </Body>

        </Header>   


<H2>Contact Us</H2>
        <Form>

        <Item stackedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Tell Us</Label>
              <Input style={{height:100}} />
            </Item>
        
        <Button style={{backgroundColor:'#333333',width:50}}  >
          <Text style={{color:'white',textAlign:'center',marginLeft:7}}>Send</Text>
        </Button>


        </Form>




        </View>
        </Drawer>

    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpPageMainView)
