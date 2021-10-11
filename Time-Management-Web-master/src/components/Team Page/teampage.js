import React, { Component } from 'react'
import'./teampage.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect} from 'react-redux';
import { ADDTeam } from '../../Actions/Actions'


class teampage extends Component {
    constructor(props){
        super(props);
        this.state={
            inputvalue: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({inputvalue:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        this.props.ADDTeam(this.state.inputvalue)
        this.setState({inputvalue: ''})

    }

  render() {
    
  
      const{Team} = this.props;
    return (
        <div className="teams-container">
        <div className="teampage-container">
            <h1 className="teampage-header">Team</h1>
            <div className="page__container__add-new">
                <form onSubmit={this.onSubmit} >
                <input value={this.state.inputvalue} onChange={this.onChange} placeholder="Add new members by email address..." autoFocus className="page__container__add-new--input" type="text"/>
                <button className="page__container__add-new--button">

      Add
    </button>
    </form>
    </div>

            <div className="tap-bigcontainer">
            <Tabs >
                    <TabList >
                    <Tab ><span>Active</span></Tab>
                    </TabList>
                     <TabPanel >
               
                        <div className="teampagecontent">
                        <div className="teampage__content--header">
                        <div className="headername-tag"><span >Name</span></div>
                        <div><span>Email</span></div>
                        <div className="hourlyheader"><span>Hourly Rate</span></div>



                        </div>
                        {Team.map(team => (
                             <div className="teampage__item">
                             <div className="teampage_item_header_div">
                             <i class="fas fa-ellipsis-v"/><span className="teampage__item--name">{team}</span></div>
                             <div><span>momen2310@gmail.com</span></div>
                             <div className="inputhourlydiv">
                                 <input className="inputhourlyrate" placeholder="Rate" type="text"/><span>USD</span>
                             </div>
                         </div>
                        ))}
                       
                        </div>

                        </TabPanel>
                        
                        </Tabs>
            
            </div>
            </div>
        
        
      
      </div>
    )
  }
}
const mapStateToProps = state => ({
    Team: state.time.Team
  });
  
export default connect(mapStateToProps,{ADDTeam})(teampage);
