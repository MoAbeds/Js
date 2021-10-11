import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Card,ListGroup,Figure } from 'react-bootstrap';

 class ShoppingList extends Component {
  render() {
    return (
        <div>
             <h2 className="addtoshoppingtag">MY SHOPPING LIST
</h2>
      <div className='shoppingingcontainer'>
        <ListGroup className="inglist">
            {this.props.ShopING.map(ing =>(
                <ListGroup.Item className="ingitem">{ing}</ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      </div>
    )
  }
}


const mapStateToProps= state => ({
    ShopING: state.recipe.ShopING
})

export default connect (mapStateToProps,{})(ShoppingList);