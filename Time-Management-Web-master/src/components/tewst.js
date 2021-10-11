<div className="iconsleft">
          <i class="far fa-clock"> </i>
            
          </div>








<React.Fragment>
<div className="tracker_description">
<input spellCheck={true} tabIndex='-1' className="tracker_input_entry" type="text"/>
</div>
<div className="project_entry">
<i class="fas fa-plus"></i>
<span>Project</span>
</div>
<div className="tag_entry">
<i class="fas fa-tag"></i>
</div>
<div className="entry_right_container" > 
<div className="dollar_entry" >
<i class="fas fa-dollar-sign"></i>
</div>
<input className="stopwatch_input" autoComplete="off" placeholder="00:00:00" type="text"/>
<button className="stopwatch_button">START</button>
<div className='switch_entery'>
<i class="far fa-clock"> </i>
<i class="fas fa-list-ul"></i>
</div>
<div>
</div>
</div>
</React.Fragment>






.table-container--margin table{
    border-collapse: separate;
    border-spacing: 0;
    min-width: 39.625rem;
    height: 100px;
    width: 100%;
}

.table__thead{
    line-height: 3.75rem;
    max-height: 4.6875rem;
    min-height: 4.6875rem;
    position: relative;
    border: 1px solid #c6d2d9;
    border-top-left-radius: .125rem;
    font-size: .875rem;
    
}

.table-container--margin table th {
    background-color: #e4eaee;
    color: #999;
    font-weight: 400;
    position: relative;
    left:0px;

}


.table-container--margin table tr {
    font-family: Roboto,sans-serif;
    font-size: .875rem;
    height: 3.75rem;
    background: tan;
    

}
.teams--dropdown{
    padding: 0 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-left: 1px solid #c6d2d9;
    border-bottom-left-radius: .125rem;
    border-bottom: 1px solid #c6d2d9;
    vertical-align: middle;

}

.table__tbody{
    background: teal;
    color: yellow;
    position: relative;
    left: 10px;
    width: 100%;
}

.table-container--margin table{
    line-height: 3.75rem;
    color: #333;
    font-size: .875rem;
    width: 100%;
}


.hourlyRate{
    display: inline-block;
    font-size: 16px;
}

.hourlyRate__amount{
    box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
    display: inline-block;
    width: 50px;
    height: 35px;
    vertical-align: middle;
    font-size: 16px;
    margin: 0 10px 0 0;
    border-radius: .125rem;
    box-sizing: border-box;
    padding: .5rem;
    border: 1px solid #cacaca;
    background-color: #fefefe;
    font-weight: 400;
    color: #0a0a0a;
    transition: box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;


}

.table-container--margin table {
    line-height: 3.75rem;
    color: #333;
    font-size: .875rem;
}




<div className="table-container--margin">
                        <input placeholder="Filter by Name, E-mail or Access" className="filter-input" type="text"/>
                        <div className="filter-section">
                            <input type="checkbox"/><label>Include users that are not yet joined</label>
                        </div>
                        <table className="table">
                            <thead className="table__thead">
                            <tr >
                                <th>
                                <span className="headername">Name</span>
                                </th>
                                <th ><span className="">Email</span></th>
                                <th><span>Hourly rate</span></th>
                            </tr>

                            </thead>
                            <tbody className="table__tbody">
                            <tr >
                                {Team.map(team =>(
                                    <React.Fragment>
                                     <td className="teams--dropdown">
                                     <span className="nameclass">Name</span>
                                </td>
                                <td className="tdemail"><span>momen2310@gmail.com</span> </td>
                                <td>
                                <div className="ratecontainer">
                                    <input placeholder="Rate" className="inputrateclass" type="text"/>
                                    <span>USD</span>
                                </div>

                                </td>
                                </React.Fragment>
                                ))}
                                   
                            </tr>

                            </tbody>
                        </table>
                        </div>















<div className="upradecontainer">
<div className="upgrade_items">
    <div className="upgrade_background">
        <div className="upgrade_header">
            <label className="upgrade__header--title">Get more from Klockify!</label>
            <p className="upgrade__header--text">
            </p>
        </div>
    <div className="upgrade__features">
        <div className="upgrade__features--free">
            <p className="upgrade__features--free__title">FREE</p>
            <div className="upgrade__features--free__content">
                <p className="upgrade__features--free__content--price">$0</p><label>/month</label>
                <p className="upgrade__features--free__content--text">
                    
  
                </p>
                <ul className="upgrade__features--free__content--list">
                    <li>Time tracking</li>
                    <li>Unlimited users</li>
                    <li>Unlimited projects</li>
                    <li>Reports</li>
                    <li>Billable rates</li>
                    <li></li>
                </ul>
            </div>
        <div className="upgrade__features--free--button">
            <button>your current plan</button>
        </div>


        </div>
    <div className="upgrade__features--plus">
        <p className="upgrade__features--plus__title">PLUS</p>
        <div className="upgrade__features--plus__content">
        <p className="upgrade__features--plus__content--price">$10</p><label>/month</label>
        <p className="upgrade__features--plus__content--text">
        For companies that need a bit more control over who can do what
        </p>
        <ul className="upgrade__features--plus__content--list">
            <li>Private time entries</li>
            <li>Lock timesheets</li>
            <li>Required fields</li>
            <li>Time rounding</li>
            <li>Time audit</li>
            <li>Branded reports</li>
            <li>Targets and reminders</li>
        </ul>
        <div className="upgrade__features--plus--button">
            <button>Upgrade</button>
        </div>
        </div>
    </div>
    <div className="upgrade__features--premium">
        <p className="upgrade__features--premium__title"> premium</p>
        <div className="upgrade__features--premium__content">
        <p className="upgrade__features--premium__content--price">$30</p>
        <label>/month</label>
        <p className="upgrade__features--premium__content--text">
            
    For managers that want to improve their productivity and get better reports
  
        </p>
        <ul className="upgrade__features--premium__content--list">
            <li>Private time entries</li>
            <li>Lock timesheets</li>
            <li>Required fields</li>
            <li>Time rounding</li>
            <li>Time audit</li>
            <li>Branded reports</li>
            <li>Target and reminders</li>
            <li className="upgrade__features--premium__content--list--no-before">
                <label>+</label>
            </li>
            <li>Add time for others</li>
            <li>Project templates</li>
            <li>Alerts</li>
            <li>Bulk edit</li>
        </ul>
        <div className="upgrade__features--premium--button">
                <button>upgrade</button>
        </div>
        </div>
    </div>
    <div className="upgrade__features--server">
        <p className="upgrade__features--server__title">server</p>
        <div className="upgrade__features--server__content">
          <p className="upgrade__features--server__content--price">$450</p><label>/month</label>  
          <p className='upgrade__features--server__content--text'>
    For large organizations that need complete control over their data
  </p>
    <ul className="upgrade__features--server__content--list">
        <li>Host on own servers</li>
        <li>Scalable to thousands of users</li>
        <li>Installation assistance</li>
        <li>Single Sign-On integration</li>
        <li>Priority support</li>
        <li>Custom development and SLA</li>
        <li>All features and updates</li>
    </ul>
    <div className="upgrade__features--server--button">
        <button>contact</button>
    </div>
        </div>
        
        </div>
        </div>
    <div className="upgrade__questions">
        <h2>Frequently asked questions</h2>
        <div className="upgrade__questions--answers">
            <h3>Does it matter how many users I have?</h3>
            <p>It doesn't matter how many users you have, all the prices are flat. However, plans are workspace specific: if you have multiple workspaces, you can choose which ones you want to pay for.
</p>
        </div>
        <div className="upgrade__questions--answers">
            <h3>Can I try it out first?</h3>
            <p>Absolutely! You can try out premium features free for one whole week
  (you don't even need a credit card). To start your free trial,
  </p>
        </div>
        <div className="upgrade__questions--answers"><h3>
        Can I pay yearly?   </h3>
        <p>We will support annual payments in the future.
</p>
         </div>
        <div className="upgrade__questions--answers">
        <h3>Do you offer any discounts?</h3>
        <p>We will offer a 10% discount when paying annually in the future.</p>
        </div>
        <div className="upgrade__questions--answers">
            <h3>Do you issue refunds?</h3>
            <p>We don’t offer refunds. But if you're on a paid monthly plan, you can cancel any time you want and all future payments will be stopped.
</p>
        </div>
        <div className="upgrade__questions--answers">
            <h3>What types of payment are supported?</h3>
            <p>We support only payments by credit card. Wire/bank transfers, PayPal, and purchase orders aren't supported (except for the Server plan).</p>
        </div>
        <div id='tag' className="upgrade__questions--answers">
            
        </div>
    </div>
        </div>   
    </div>
</div>




























/////////////////////////////////////////////////////


import React, { Component } from 'react';
import './timetracker.css'
import Calendar from 'react-calendar';
import { connect} from 'react-redux';
import { TrackerItems } from '../Actions/Actions'
import onclock from 'o-clock';
import uniqid from 'uniqid';
import timestamp  from 'time-stamp'
import {Card,FormControl,Container,Row,Col,Button } from 'react-bootstrap';
class InputBar extends Component {
    constructor(props){
        super(props);
      this.lastUpdateTime = Date.now();
      this.interval = null;
      this.timeoutInterval = 10;
      
      this.state = {
          hour: 0,
        min: 0,
        sec: 0,
        cs: 0,
        TimeMode: true,
        ManualMode: false,
        date: new Date(),
        showCalender: false,
        fullTrackerData : {
            fulltime:'',
            iputData: '',
            startingdata: '',
            trackerID: '',
            calenderDate: ''

        },
        fulltimetracker: '',
        inputValue: '',
        
       tagtogglemenu : false,
       tagshowinInout: false,
        tagtogglemenulabel: '',
        
        checkboxstate: false,
        GoingTimeMode: false,
        StopingTimeMode: true
       
         
       
      }
      
      this.updateTime = this.updateTime.bind(this);
      this.setTime = this.setTime.bind(this);
      this.start = this.start.bind(this);
      this.pause = this.pause.bind(this);
    }
    addZero = (n) => {
        return n < 10 ? '0' + n : n;
      }
     

   
    updateTime(){
        let msPassed = Date.now() - this.lastUpdateTime;
          let newHour = this.state.hour;
        let newMin = this.state.min;
        let newSec = this.state.sec;
          let newCs = 0;
        
        this.lastUpdateTime += msPassed;
        
          if(this.state.cs + msPassed >= 1000){
            if(this.state.sec + 1 >= 60){
              newSec = 0;
              if(this.state.min + 1 >= 60){
                newMin = 0;
                newHour = this.state.hour + 1;
            }else{
                newMin = this.state.min + 1;
            }
          }else{
              
              newSec = this.state.sec + 1;
          }
        }else{
            newCs = this.state.cs + msPassed;
        }
        
            this.setTime(newHour, newMin, newSec, newCs);
      }
      
      setTime(newHour, newMin, newSec, newCs,fulltime){
         let newsecond =  this.addZero(newSec);
         let newMins = this.addZero(newMin);
         let newHours = this.addZero(newHour)
        this.setState({
            hour: newHour,
          min: newMin,
          sec: newSec,
          cs: newCs,
          fulltimetracker : `${newHours}:${newMins}:${newsecond}`,
          fullTrackerData : {...this.state.fullTrackerData,fulltime:  `${newHours}:${newMins}:${newsecond}` }
        });
      }

    
      
      start(){
          let clocky = onclock()
            let trackerID = uniqid();
            let calenderDate = timestamp()
        this.lastUpdateTime = Date.now();
        let interval = setInterval(this.updateTime, 10);
        this.interval = interval;
        this.setState({
         
          fullTrackerData: {...this.state.fullTrackerData,startingdata: clocky,trackerID: trackerID,calenderDate:calenderDate}
        });

      }
      
      pause(){

        clearInterval(this.interval);
        this.interval = null;
        
      }
   
    onClick(){
        this.start();
        this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode
        })

    }
    onClickReset(){
        this.pause();
        this.setTime(0, 0, 0, 0);
        this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode

        })
    }

    onClickEndTimer(){
        this.pause();
        this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode,
            inputValue: '',
            fullTrackerData : {...this.state.fullTrackerData,fulltime:  `${this.state.hour}:${this.state.min}:${this.state.sec}` }



        })

        
        this.props.TrackerItems(this.state.fullTrackerData)
        this.setTime(0, 0, 0, 0);

    }

    
     

  render() {
 
      const {showCalender} = this.state;
      const {GoingTimeMode} = this.state;
      const {tagtogglemenu} = this.state;
      const {Tags} = this.props;
      const {tagshowinInout} = this.state;
    return (
        <Card style={{height:'90px',width:'90%'}}>
          <Card.Body>
            <Container>
              <Row>
              <Col lg={6} >
              <FormControl style={{width:''}} value={this.state.fullTrackerData.iputData}
                           onChange={(e)=>this.setState({
                           fullTrackerData: {inputData:e.target.value}
                        })} placeholder="What's up" spellCheck={true} 
                         tabIndex='-1' type="text" />
              
              </Col>
              <Col lg={1} >
              <div className="project_entry">
              <i class="fas fa-plus"></i>
              <span>Project</span>
              </div>
              </Col>
              <Col lg={0.5}  >
              <i class="fas fa-tag"></i>
                      
              </Col>
              <Col >
              {GoingTimeMode?
                     (
                    <React.Fragment>
                    <i class="fas fa-dollar-sign"></i>

                    <FormControl autoComplete="off" placeholder={`${this.state.fulltimetracker}`|| '00:00:00'	} type="text"/>
                    <Col><Button 
                      variant="danger"
                       onClick={()=>this.onClickEndTimer()}
                     className="stopwatch_button_toggle_new">End</Button>
                     <i onClick={() =>this.onClickReset()} class="fas fa-times"></i></Col>
                    
                     </React.Fragment>
                     ):
                        
                    (
                    <Container>
                      <Row>
                        <Col lg={0.5}>
                        <i class="fas fa-dollar-sign"></i>
                        </Col>
                        <Col >
                        <FormControl style={{textAlign:'center',width:'140%'}} autoComplete="off" placeholder={`${this.state.fulltimetracker}`|| '00:00:00'	} type="text"/>
                        </Col>
                        <Col lg={4} >
                        <Button variant="primary" onClick={()=>this.onClick()}
                       
                       >START</Button>
                        </Col>
                      </Row>
                    </Container>
                    
                    
                      

               )}
              </Col>
              </Row>
            </Container>
           

                         



          </Card.Body>
        </Card>
            
    )
  }
}

const mapStateToProps = state => ({
    Tags: state.time.Tags,
  })
  
export default connect(mapStateToProps,{TrackerItems})(InputBar);
















/*******************
 * 
 * 
 */



import React, { Component } from 'react';
import './timetracker.css'
import Calendar from 'react-calendar';
import { connect} from 'react-redux';
import { TrackerItems } from '../../Actions/Actions'
import onclock from 'o-clock';
import uniqid from 'uniqid';
import timestamp  from 'time-stamp'
import Counter from './counter'
import TimerMachine from 'react-timer-machine'
 
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";







class InputBar extends Component {
    constructor(props){
        super(props);
      this.lastUpdateTime = Date.now();
      this.interval = null;
      this.timeoutInterval = 10;
      
      this.state = {
        selectedOption: null,

          hour: 0,
        min: 0,
        sec: 0,
        cs: 0,
        TimeMode: true,
        ManualMode: false,
        date: new Date(),
        showCalender: false,
        fullTrackerData : {
            fulltime:'',
            iputData: '',
            startingdata: '',
            trackerID: '',
            calenderDate: '',
            MoneySign: false,

        },
        fulltimetracker: '',
        inputValue: '',
        
       tagtogglemenu : false,
       tagshowinInout: false,
        tagtogglemenulabel: '',
        
        checkboxstate: false,
        GoingTimeMode: false,
        StopingTimeMode: true,
        isOpen:false,
        value: undefined
       
         
       
      }
      
      this.updateTime = this.updateTime.bind(this);
      this.setTime = this.setTime.bind(this);
      this.start = this.start.bind(this);
      this.pause = this.pause.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    addZero = (n) => {
        return n < 10 ? '0' + n : n;
      }
     
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
   
    updateTime(){
        let msPassed = Date.now() - this.lastUpdateTime;
          let newHour = this.state.hour;
        let newMin = this.state.min;
        let newSec = this.state.sec;
          let newCs = 0;
        
        this.lastUpdateTime += msPassed;
        
          if(this.state.cs + msPassed >= 1000){
            if(this.state.sec + 1 >= 60){
              newSec = 0;
              if(this.state.min + 1 >= 60){
                newMin = 0;
                newHour = this.state.hour + 1;
            }else{
                newMin = this.state.min + 1;
            }
          }else{
              
              newSec = this.state.sec + 1;
          }
        }else{
            newCs = this.state.cs + msPassed;
        }
        
            this.setTime(newHour, newMin, newSec, newCs);
      }
      
      setTime(newHour, newMin, newSec, newCs,fulltime){
         let newsecond =  this.addZero(newSec);
         let newMins = this.addZero(newMin);
         let newHours = this.addZero(newHour)
        this.setState({
            hour: newHour,
          min: newMin,
          sec: newSec,
          cs: newCs,
          fulltimetracker : `${newHours}:${newMins}:${newsecond}`,
          fullTrackerData : {...this.state.fullTrackerData,fulltime:  `${newHours}:${newMins}:${newsecond}` }
        });
      }

    
      
      start(){
          let clocky = onclock()
            let trackerID = uniqid();
            let calenderDate = timestamp()
        this.lastUpdateTime = Date.now();
        let interval = setInterval(this.updateTime, 10);
        this.interval = interval;
        this.setState({
         
          fullTrackerData: {...this.state.fullTrackerData,startingdata: clocky,trackerID: trackerID,calenderDate:calenderDate}
        });

      }
      
      pause(){

        clearInterval(this.interval);
        this.interval = null;
        
      }
   
    onClick(){
        this.start();
        this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode
        })

    }
    onClickReset(){
        this.pause();
        this.setTime(0, 0, 0, 0);
        this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode

        })
    }

    onClickEndTimer(){
        this.pause();
        this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode,
            inputValue: '',
            fullTrackerData : {...this.state.fullTrackerData,fulltime:  `${this.state.hour}:${this.state.min}:${this.state.sec}` }



        })

        
        this.props.TrackerItems(this.state.fullTrackerData)
        this.setTime(0, 0, 0, 0);

    }

    toggleOpen = () => {
      this.setState(state => ({ isOpen: !state.isOpen }));
    };
    onSelectChange = value => {
      this.toggleOpen();
      this.setState({ value });
    };
     

  render() {
 
      const {TimeMode} = this.state;
      const {showCalender} = this.state;
      const {GoingTimeMode} = this.state;
      const {tagtogglemenu} = this.state;
      const {Tags} = this.props;
      const {tagshowinInout} = this.state;
      const { isOpen, value } = this.state;

    return (
      <React.Fragment>
            <div style={{width:'100%'}} className="allitems">
                <div className='entry'>

                        <React.Fragment>
                        <div className="tracker_description">
                        <input value={this.state.fullTrackerData.iputData} onChange={(e)=>this.setState({
                           fullTrackerData: {inputData:e.target.value}
                        })} placeholder="What's up" spellCheck={true}  tabIndex='-1' className="tracker_input_entry" type="text"/>
                    </div>
                    
                    <div className="project_entry">
                    <i  class="fas fa-plus"></i>
                    <span>Project</span>
                    
                    </div>
                    
                    <div className="tag_entry">
                    <i class="fas fa-tag"></i>
                    
                    </div>
                    {GoingTimeMode?
                     (<div className="entry_right_container" > 
                    <div className="dollar_entry" >
                    <i class="fas fa-dollar-sign"></i>
                    </div>
                    <input className="stopwatch_input" autoComplete="off" placeholder={`${this.state.fulltimetracker}`|| '00:00:00'	} type="text"/>
                    <button 
                       onClick={()=>this.onClickEndTimer()}
                     className="stopwatch_button_toggle_new">End</button>
                     <div className="stoptimerdiv">
                     <i onClick={() =>this.onClickReset()} class="fas fa-times"></i>
                     </div>
                     </div>):
                        
                    (<div className="entry_right_container" > 
                    <div className="dollar_entry" >
                    <i onClick={()=>{this.setState({
                     fullTrackerData: {...this.state.fullTrackerData,MoneySign: !this.state.fullTrackerData.MoneySign}
                    })} }  class="fas fa-dollar-sign"></i>
                    </div>
                    <input className="stopwatch_input" autoComplete="off" placeholder={`${this.state.fulltimetracker}`|| '00:00:00'	} type="text"/>
                    <button onClick={()=>this.onClick()}
                       
                     className="stopwatch_button">START</button>
                    <div className='switch_entery'>
                    <i style={{color:'#03a9f4'}}  class="far fa-clock"> </i>


                    </div>
                      

                </div>)}
                <TimerMachine
        timeStart={0 * 1000} // start at 10 seconds
         
        started={true}
        paused={false}
        countdown={false} // use as stopwatch
        interval={1000} // tick every 1 second
        formatTimer={(time, ms) =>
          moment.duration(ms, "milliseconds").format("hh:mm:ss")
        }
        
    />
                        </React.Fragment>
                   

                   
                        

                    
                </div>
               
            </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
    Tags: state.time.Tags,
  })
  
export default connect(mapStateToProps,{TrackerItems})(InputBar);