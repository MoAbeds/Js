import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card,ListGroup,ListGroupItem,Figure } from 'react-bootstrap';
import { LovedRec,ADDING } from '../action/rec_action';
 class Recipe extends Component {
    state={
      loveclicked:false
    }

    renderRecipe(){
       
        const {recipe}= this.props;
       
       
        let ingredients;
        
        
        if (!this.props.recipe || !this.props.recipe.ingredients || this.props.recipe.ingredients.length === 0) {
            return null;
        }
        
        else{
         
                ingredients = recipe.ingredients.map((ingredient) => {
                return <ListGroupItem key={ingredient.text}> <i className="fas fa-flask Li_Icon"></i>{'  '}{ingredient.text}

                </ListGroupItem>     
                })
         
        }
    
        
        return (
            <React.Fragment>
              <Card>
                <span className="img-fig">
                <Card.Img alt={recipe.image} src={recipe.image}/>
                </span>
                <Card.ImgOverlay>
                  <Card.Title> <span>
                  { recipe.label.length < 10 ? `${recipe.label}` : `${recipe.label.substring(0, 15)}...` }
                  </span>     </Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                  <div className="heartcontaienr">
                  <h2 onClick={()=>this.props.ADDING(ingredients)} className="addtoshoppingtag">ADD TO SHOPPING LIST</h2>
                  {this.state.loveclicked?(
                    <i onClick={()=>{this.setState({
                      loveclicked: !this.state.loveclicked})
                  }}  class="fas fa-heart"></i>
                  ):(
                    <i onClick={()=>{this.setState({
                      loveclicked: !this.state.loveclicked})
                  this.props.LovedRec(this.props.recipe) }} class="far fa-heart"></i>
                  )}
                  
                  </div>
                  <div style={{height:'50%',overflowX:'scroll'}} >
                  <ListGroup style={{overflowX:'scroll'}} >
                    
                    {ingredients}

                  </ListGroup>
                  </div>
                </Card.Body>
              </Card>
          
            </React.Fragment>

        )

    
}
  render() {
    
    return (
      <div >
          {this.renderRecipe()}
          
        
      </div>
    )
  }
}

const mapStateToProps= state => ({
    recipe: state.recipe.recipe
})

export default connect (mapStateToProps,{LovedRec,ADDING})(Recipe);