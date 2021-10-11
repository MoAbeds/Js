import React, { Component } from 'react'
import './usergroup.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { connect} from 'react-redux';
import { ADDUserGroup,RemoveUserGroup} from '../../Actions/Actions'

 class usergroup extends Component {
    constructor(props){
        super(props);
       
        this.handleDeleteForUserGroup= this.handleDeleteForUserGroup.bind(this);
        this.handleAdditionForUserGroup= this.handleAdditionForUserGroup.bind(this);
    }

    handleDeleteForUserGroup(i){
      
        this.props.RemoveUserGroup(i)
    }

    handleAdditionForUserGroup(usergroup) {
        this.props.ADDUserGroup(usergroup)
    }


  render() {

    return (
        <div className="usergroup-container">
        <div className="usergrouppage-container">
        <div className="tagdiv">
            <h1 className="usergrouptitle-page">User Group</h1>
        <div  className="div__content-usergroup--add-new-usergroup">
                            <div>
                            <ReactTags
                            allowDragDrop={false}
                            tags={this.props.UserGroup}
                            handleDelete={this.handleDeleteForUserGroup}
                            handleAddition={this.handleAdditionForUserGroup}
                             placeholder="New user group name..." 
                             inline={false} />
                             
                            </div>

        </div>
        </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    UserGroup: state.time.UserGroup
  });

export default connect(mapStateToProps,{ADDUserGroup,RemoveUserGroup})(usergroup);
