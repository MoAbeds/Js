import React, { Component } from 'react'
import './realWorkSpace.css'
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import {RemoveWorkSpace} from '../../Actions/Actions'
 class RealWorkspace extends Component {

    

  render() {
    const {WorkSpace} = this.props;

    return (
      <React.Fragment>

      <div className="workspace-container1">
        <div className="page-container">
        <h1 className="workspace__title">Workspaces</h1>
        <Link to="/workspaces/create/new" className="text" >

           <button className="workspace__button-create-new">create new workspace</button>
           </Link>
            <div className="workspace__content">
                <div className="workspace__content--header">
                <span>Workspaces</span>
                </div>
                {WorkSpace.map(workspace =>(
                    <div key={workspace.id} className="workspace__item">
                    <i class="far fa-plus-square plusitem"/><span className="workspace__item--name">{workspace.inputdata}</span>
                    <div className="workspace__item--menu">
                        <button className="item--set-default-workspace">Activate
              </button>
                        <button className="item--setings">settings</button>
                        <i  class="fas fa-sign-out-alt signouticon"></i>
                    </div>
                    </div>
                ))}
                
            
            
            </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  WorkSpace: state.time.WorkSpace
});

export default connect(mapStateToProps,{RemoveWorkSpace})(RealWorkspace);
