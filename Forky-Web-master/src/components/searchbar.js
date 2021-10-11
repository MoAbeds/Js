
import React, { Component } from 'react';
import { getRecipes } from '../action/rec_action';
import { connect } from 'react-redux';
import { InputGroup,FormControl,Button,Form } from 'react-bootstrap';

 class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={term: '' };
        this.onSubmitForm= this.onSubmitForm.bind(this);

    }
    onSubmitForm(event){
     event.preventDefault();
     this.props.getRecipes(this.state.term);
     this.setState({term: ''})
     

 }
   
  render() {
    return (
          <div className="formcontainer">

    <Form onSubmit={this.onSubmitForm}>

      <InputGroup className="mb-3">
              <FormControl className="searchinput"
              value={this.state.term}
              onChange={(e)=>this.setState({term: e.target.value})}
                          placeholder="Search over 1,000,000 recipes..."
                          aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button type='submit' className="btn-search" >Search</Button>
              </InputGroup.Append>
            </InputGroup>
              
               
                </Form>
                </div>
          
    )
  }
}


export default connect(null,{getRecipes}) (SearchBar);
