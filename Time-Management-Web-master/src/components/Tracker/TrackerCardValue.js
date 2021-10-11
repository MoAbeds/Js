import React, { Component } from 'react'
import { connect} from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TrackerDelete,resumeTimer } from '../../Actions/Actions'
import Moment from 'react-moment';

 class TrackerCardValue extends Component {
  constructor(props){
    super(props);
   this.state = {
     showCalender: false,
     hideCalender: true
   }
   this.renderTrackerCard = this.renderTrackerCard.bind(this);
   this.onClick = this.onClick.bind(this);

  }
  onClick(id){
    this.props.TrackerDelete(id)
  }

  renderTrackerCard(TrackerValue){
    let fulltime = TrackerValue.fulltime;
    let inputdata = TrackerValue.inputData;
    let trackerID = TrackerValue.trackerID;
    let startingDate = TrackerValue.startingdata;
    let MoneySign = TrackerValue.MoneySign;
    let Daten = new Date();

    
    if(!TrackerValue ||  TrackerValue.length ===0  ){
      return null
    }else{
      
      return(
        <div className="trackercard_finished_list">
         <div className="trackercard_list_date">
            <span><Moment format="ddd,Do,MMM">{Daten}</Moment></span>
            <div><span>Total:</span> {fulltime}</div>
         </div>
         <div key={trackerID} className="trackercard_list_timeentry_div">
           <div className="trackercard_list_time_fullentry">
              <div className="trackercard_list_time_input_div">
              <input value={inputdata} spellCheck={true} tabIndex='-1' className="trackercard_list_fullentry_input" type="text"/>
                     
                        <div className="project_trackerlist_entry">
                       

                      
                        </div>
                        <div className="tag_trackerlist_entry">
                        <i class="fas fa-tag"></i>
                        </div>
                        <div className="rightcontainer_trackerlist_entry" > 
                        <div className="dollar_trackerlist_entry" >
                        <i style={{color:MoneySign? '#03A9F4':'#272727'}} class="fas fa-dollar-sign"></i>
                        </div>
                            <div className="timer_container_trackerlist_entry">
                            <div className="timer_end_trackerlist_entry">
                                <input value={startingDate} className='input_trackercard_end' type="text"/>
                         
                        
                            <div className="timer_container_trackerlist_entry_start"><input className="input_trackercard_start" type="text"/></div>
                               
                                </div>
                            
                              <input value={fulltime} className="seetime_input_trackercard" type="text"/>
                            
                        
                            
                            <i onClick={()=> this.props.TrackerDelete(trackerID)}  class="fas fa-times deletecard"></i>
                                                    
                        
                        <div>
                        
                        </div>
                        </div>
                        </div>
                        </div>
            </div>
         </div>
        </div>
      )
    }
    

  }



  render() {
   
      return (
      
        <React.Fragment>
          {this.props.TrackerValue.map(this.renderTrackerCard)}
        </React.Fragment>
      )

    }
   
  }

const mapStateToProps = state => ({
  TrackerValue: state.time.TrackerValue,
  Tags : state.time.Tags
})

export default connect(mapStateToProps,{TrackerDelete,resumeTimer})(TrackerCardValue);

