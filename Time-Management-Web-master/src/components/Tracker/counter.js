import React, { Component } from 'react'
import onclock from 'o-clock';
import uniqid from 'uniqid';
import timestamp  from 'time-stamp'
export default class Counter extends Component {
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
            calenderDate: ''

        },
        fulltimetracker: '',
        inputValue: '',

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

  render() {
    return (
      <div>

        <span >{console.log(this.state.fulltimetracker)}</span>
        <button start={this.start} >desefds</button>

      </div>
    )
  }
}
