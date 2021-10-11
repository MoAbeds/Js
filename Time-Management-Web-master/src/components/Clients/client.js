import React, { Component } from 'react'
import './client.css';
import { WithContext as ReactTags } from 'react-tag-input';
import { connect} from 'react-redux';
import { ADDClient,RemoveClient} from '../../Actions/Actions'

 class clientpage extends Component {
    constructor(props){
        super(props);
       
        this.handleAdditionForClient= this.handleAdditionForClient.bind(this);
        this.handleDeleteForClient= this.handleDeleteForClient.bind(this);
    }

    handleDeleteForClient(i){
      
        this.props.RemoveClient(i)
    }

    handleAdditionForClient(client) {
        this.props.ADDClient(client)
    }


  render() {

    return (
        <div className="client-container">
        <div className="clientpage-container">
        <div className="clientdiv">
            <h1 className="clienttitle-page">Client</h1>
        <div  className="div__content-client--add-new-client">
                            <div>
                            <ReactTags
                            allowDragDrop={false}
                            tags={this.props.Clients}
                            handleDelete={this.handleDeleteForClient}
                            handleAddition={this.handleAdditionForClient}
                             placeholder="New Client name..." 
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
    Clients: state.time.Clients
  });

export default connect(mapStateToProps,{ADDClient,RemoveClient})(clientpage);
