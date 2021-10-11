import React, { Component } from 'react';
import './timetracker.css'
import { connect} from 'react-redux';
import { TrackerItems } from '../../Actions/Actions'
import onclock from 'o-clock';
import uniqid from 'uniqid';
import timestamp  from 'time-stamp'
import TimerMachine from 'react-timer-machine'
import moment from "moment";
import Select, { components } from 'react-select';
import momentDurationFormatSetup from "moment-duration-format";
import DropDown from './DropDown'

momentDurationFormatSetup(moment);

class InputBar extends Component {
 
    constructor(props){
        super(props);
      
      
      this.state = {

        fullTrackerData : {
            fulltime:'',
            iputData: '',
            startingdata: '',
            trackerID: '',
            calenderDate: '',
            MoneySign: false,

        },
        fulltimetracker: '',
        tikstate: '00:00:00',
       starttimer: false,
       pausetimer: false,
        GoingTimeMode: false,
        StopingTimeMode: true,}

      
      
    }
   

    /** add zeros to time to goes like that 00:00:00 */
    addZero = (n) => {
        return n < 10 ? '0' + n : n;
      }

      /** when called it will make started time  create uniq id and get the date of day */

     start(){
          let clocky = onclock()
            let trackerID = uniqid();
            let calenderDate = timestamp()
        this.setState({
         
          fullTrackerData: {...this.state.fullTrackerData,startingdata: clocky,
            trackerID: trackerID,calenderDate:calenderDate,  

          },
           
        });

      }
      
     /** when user click on start button this func will calland update toggle state */
   
      onClickTimerStart(){
        this.start();
        this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode,
            starttimer: true,
        })

    }

    /** when user click on delete sign this func will call and update state */
    onClickReset(){
        this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode,
            completedtimer: !this.state.completedtimer,
            pausetimer: false,
            starttimer: false,
            tikstate: '',})}


            /** when user click on end button this func will call and update redux state  */

    onClickEndTimer(){
      this.props.TrackerItems(this.state.fullTrackerData)

      this.setState({
            GoingTimeMode: !this.state.GoingTimeMode,
            StopingTimeMode: !this.state.StopingTimeMode,
            starttimer: false,
            pausetimer:false,
            
            tikstate: '',
            fullTrackerData : {
              fulltime:'',
              iputData: '',
              startingdata: '',
              trackerID: '',
              calenderDate: '',
              MoneySign: false,
  
          }
          
          })}

     
  render() {
   
      const {GoingTimeMode,pausetimer} = this.state;

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
                    
                   
                    {this.state.showProjectMenu?(
                      <h1>s</h1>

                      ): <div  className="project_entry">
                      <i  class="fas fa-plus"></i>
                      <span>Project</span>
                        
                      
                      </div>}
                      {this.state.showProjectMenu? (
                        <DropDown/>
                      

                      ):(
                        <div  className="tag_entry">
                        <i onClick={()=>this.setState({
                        showProjectMenu: !this.state.showProjectMenu
                      })} class="fas fa-tag"></i>
                                          </div>


                      )}
                    {/** */}
                    
                    {GoingTimeMode?
                     (<div className="entry_right_container" > 
                    <div className="dollar_entry" >
                    <i style={{color:this.state.fullTrackerData.MoneySign? '#03A9F4':'#272727'}} onClick={()=>{this.setState({
                     fullTrackerData: {...this.state.fullTrackerData,MoneySign: !this.state.fullTrackerData.MoneySign}
                    })
                    
                    } }   class="fas fa-dollar-sign"></i>
                    </div>
                    <input className="stopwatch_input" autoComplete="off" placeholder={`${this.addZero(this.state.tikstate.h)}:${this.addZero(this.state.tikstate.m)}:${this.addZero(this.state.tikstate.s)}`|| '00:00:00'	} type="text"/>
                    <button 
                       onClick={()=>this.onClickEndTimer()}
                     className="stopwatch_button_toggle_new">End</button>
                     {pausetimer?(
                        <div className="playbtndiv">
                        <i onClick={()=>this.setState({
                          pausetimer: !this.state.pausetimer
                        })} class="far fa-play-circle"/>
                         </div>
                     ):(
                       <div className="puasebtndiv">
                        <i onClick={()=>this.setState({
                          pausetimer:!this.state.pausetimer
                        })} class="far fa-pause-circle"/>
                        </div>
                     )}
                     
                     
                     <div className="stoptimerdiv">
                     <i onClick={() =>this.onClickReset()} class="fas fa-times"></i>
                     </div>
                     </div>):
                        
                    (<div className="entry_right_container" > 
                    <div className="dollar_entry" >
                    <i style={{color:this.state.fullTrackerData.MoneySign? '#03A9F4':'#272727'}} onClick={()=>{this.setState({
                     fullTrackerData: {...this.state.fullTrackerData,MoneySign: !this.state.fullTrackerData.MoneySign}
                    })
                    
                    } }  class="fas fa-dollar-sign"></i>
                    </div>
                    <input className="stopwatch_input" autoComplete="off" placeholder={'00:00:00'	}  type="text"/>
                    <button onClick={()=>this.onClickTimerStart()}
                       
                     className="stopwatch_button">START</button>
                    <div className='switch_entery'>
                    <i style={{color:'#03a9f4'}}  class="far fa-clock"> </i>

                    </div>
                      

                </div>)}
                <div style={{display:'none'}}>
                <TimerMachine
                    timeStart={0 * 1000}
                     // start at 0 seconds
                    started={this.state.starttimer}
                    paused={this.state.pausetimer}
                    onTick={time =>
                      {console.info(time)
                      this.setState({
                        tikstate : time,
                        fullTrackerData: {...this.state.fullTrackerData,  
                          fulltime:  `${this.addZero(this.state.tikstate.h)}:${this.addZero(this.state.tikstate.m)}:${this.addZero(this.state.tikstate.s+1)}`}
                      })
                    }}
                    countdown={false} // use as stopwatch
                    interval={1000} // tick every 1 second
                    formatTimer={(time, ms) =>
                      moment.duration(ms, "milliseconds").format("hh:mm:ss")
                    }
                    
                        />
                        </div>
                        
                        </React.Fragment>
                        
                   

                   

                    
                </div>
               
            </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
    Tags: state.time.Tags,
    ResumeTimerCard:state.time.ResumeTimerCard
  })
  
export default connect(mapStateToProps,{TrackerItems})(InputBar);