 import React, { Component } from 'react';
 import Switch from "react-switch";
 import Moment from 'react-moment';
 import { changestyle } from '../../Actions/weather_actions';
 import { connect } from 'react-redux';
 import classnames from 'classnames';
 import  './Header.css'
  class Header extends Component {
    renderDate(){
      const date = new Date();
      return(
        <Moment className={classnames({"datetext":this.props.changeStyle},{"datetextnew":!this.props.changeStyle}) } format="dddd ,  MMMM D, YYYY">{date}</Moment>
      )
    }
    constructor() {
        super();
        this.state = {
             checked: true,
             date: [],
             color: 'white'

            
            }
            

        
    
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(checked) {
          
        this.setState({ checked:!this.state.checked });
        this.props.changestyle(this.state.checked)
       
        
      }
      
   render() {
     return (
       <div className={classnames({"header":this.props.changeStyle},{"headernew":!this.props.changeStyle}) }>
      
          <div className={classnames({"datediv":this.props.changeStyle},{"datedivnew":!this.props.changeStyle}) } >
         <h5>{this.renderDate()}</h5>
         </div>
         
          <div className="styletogglebtndiv">
         <label htmlFor="material-switch">
            <span className="lighttext" >Light</span>
            <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#FFDD00"
            onHandleColor="#FFFF"
            offHandleColor="#31264F"
            offColor='#737373'
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            className="HeaderToggle"
            id="material-switch"
                />
            <span className="darktext" >Dark</span>

            </label>
           
            </div>
       </div>
     )
   }
 }
 const mapStateToProps = state => ({
  changeStyle: state.weather.changeStyle
})

 export default connect (mapStateToProps,{changestyle})(Header);