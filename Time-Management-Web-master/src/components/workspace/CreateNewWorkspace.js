import React, { Component } from 'react'
import './createnewworkspace.css'
import { connect} from 'react-redux';
import {ADDWorkSpace} from '../../Actions/Actions'
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

 class createnewworkspace extends Component {
     constructor(props){
         super(props);
         this.state = {
            inputvalue : '',
            fulldata: {
                id:  '',
                inputdata: '',
                Wspacestate: false

            }
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

     }
   

    onChange(e){
        let id = uniqid();
        this.setState({inputvalue: e.target.value,
            fulldata : { ...this.state.fulldata,id: id , inputdata : this.state.inputvalue

            }
        })
        
    }
    
    onSubmit(e){
        e.preventDefault();
        this.props.ADDWorkSpace(this.state.fulldata)
        this.setState({inputvalue: ''})
        this.props.history.push('/workspaces');



    }
    render() {
    return (
        <div className="createworkspace-container">
        <div className="create-page-container">
        <h1 className="create-workspace__title">Workspaces</h1>
        <div className="create-workspace__content">

        <div className="create-workspace__content--header">
                <span>Create new workspace</span>
                </div>
                <div className="workspace__content--create-new">
                <h1 className="create-workspace__title">Give your new workspace a name.</h1>
                <div>
                    <form onSubmit={this.onSubmit} >
                    <input value={this.state.inputvalue} onChange={this.onChange} autoFocus className="inputclass" type="text"/>
                    <div className="button__container">
                    <Link to="/workspaces" className="text" >

                        <button className="backbutton"><i class="fas fa-chevron-left"></i>Back</button>
                        </Link>
                        {this.state.inputvalue.length> 5? (
                            <button className="con_btn_active">Continue</button>

                        ) : (<button disabled className="con_btn_dis">Continue</button>
                        )}
                    </div>
                    </form>
                </div>
                
                </div>
        </div>
        </div>
        </div>
    )
  }
}



export default connect(null,{ADDWorkSpace})(createnewworkspace);