import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getweather} from '../../Actions/weather_actions';
import deleteicon from '../../icons/deleteicon.svg';
import classnames from 'classnames';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
 class SearchForm extends Component {
     constructor(props){
         super(props);
         this.state={
           city: '',
           showSearchForm: false,
           hidecardelements: true,
           removeform: false,
           selected : { value: 'US', label: 'USA'}
           
        
        }
        this.onSubmit= this.onSubmit.bind(this);


     }

     
     

     onSubmit(event){
         event.preventDefault();
         this.props.getweather({
           city: this.state.city,
           country: this.state.selected.value
         });
         this.setState({city: ''});
        
         
     }
  render() {
    const {showSearchForm} = this.state;
    const {hidecardelements}=this.state;

    /** Drop Down Options */
    const options = [
      { value: 'US', label: 'USA'},
      { label:"Rus" , value:"RU" },
      { label:"UK" , value:"GB" },
      {label:"EGY" , value:"EG"},
      {label:"IND", value:"IN" }];
      
    const defaultOption = this.state.selected;

    return (
      <div className={classnames({"cardDesign":this.props.changeStyle},{"cardDesignnew":!this.props.changeStyle}) }>
     
            {/** Show Or Hide Menu  */}
     
        {showSearchForm? (

          <form className="formdesign" onSubmit={this.onSubmit}>

            {/** close Menu Button */}

          <img onClick={()=>this.setState({
              showSearchForm: !this.state.showSearchForm,
              hidecardelements: !this.state.hidecardelements})}
             className="closetheicon" src={deleteicon} alt="deleteicon"/>

            {/** City Input */}
            
          <input className="inputshape" type="text"
            value={this.state.city}
            onChange={(event)=>  this.setState({city: event.target.value}) }
            placeholder="Enter Your City"
            />

           {/** country dropdown select */}

          <Dropdown
            options={options}
            onChange={(option)=>this.setState({selected: option})}
            value={defaultOption}
            placeholder="Select an option"
            />

              {/** Submit Form Button */}

          <button className="formbtn"type='click' >See Today Weather</button>
           
         
         </form>
        ):null}


          {/** Hide elements on Card on Form Active */}
         
          {hidecardelements? (
            <div>
              <h5>ADD CITY</h5>
     
              <i  onClick={()=>this.setState({
               showSearchForm: !this.state.showSearchForm,
               hidecardelements: !this.state.hidecardelements})}  
               class="fas fa-plus-circle"></i>
             </div>
          ):null}
          
          

        
      </div>
    )
  }
}
const mapStateToProps = state => ({
  
  changeStyle: state.weather.changeStyle
})

export default connect (mapStateToProps,{getweather}) (SearchForm);
