import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card,ListGroup,ListGroupItem,Figure,Dropdown,Image } from 'react-bootstrap';
import {  LovedToMain  } from '../action/rec_action';
 class LovedRecipes extends Component {
  render() {
      const {LovedRec} = this.props;

      if(LovedRec===0 || LovedRec.length===0){

        return null

      }else{
          return(
        <div className="lovedcontainer" >
        <Dropdown>
   <Dropdown.Toggle className="btntoggle" id="dropdown-menu-align-right">
   <i class="fas fa-heart"></i>

   </Dropdown.Toggle>

   <Dropdown.Menu>
     {LovedRec.map(recipe=>(
                     <Dropdown.Item eventKey="1">
                     <ListGroup  >
                         <ListGroup.Item  onClick={()=>this.props.LovedToMain(recipe)} >
                         <span className='recipesstyle'>

<Image  height={55} width={55} src={recipe.image} roundedCircle />
</span>

  <p className="recipestitle">   { recipe.label < 10 ? `${recipe.label}` : `${recipe.label.substring(0, 15)}...` } </p>
                         </ListGroup.Item>
                     </ListGroup>
                     </Dropdown.Item>

     ))}

     
   </Dropdown.Menu>
 </Dropdown>
     </div>
     )
      }
   
  }
}


const mapStateToProps= state => ({
    LovedRec: state.recipe.LovedRec
})

export default connect (mapStateToProps,{LovedToMain})(LovedRecipes);