import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getRecipe} from '../action/rec_action';
import { ListGroup,Image } from 'react-bootstrap';

class Recipes extends Component {

    
  render() {
      const {recipes} = this.props;
      if (recipes){
        

        return (
          <React.Fragment>
            <div className="recipessrcoll">
            
            {recipes.map((recipe =>(
              <React.Fragment>
              <ListGroup style={{width:'100%'}}>
                <ListGroup.Item style={{width:'100%',fontSize:'9px'}} 
                key={recipe.recipe_id}
                 onClick={() => this.props.getRecipe(recipe.recipe)} >
                                <span className='recipesstyle'>
{console.log(recipe.recipe.url)}
                <Image height={55} width={55} src={recipe.recipe.image} roundedCircle />
                </span>

                         <p className="recipestitle">   { recipe.recipe.label.length < 10 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 15)}...` } </p>
                            <p className="recipesPublisher">{recipe.recipe.source}</p>
</ListGroup.Item>
              </ListGroup>
                </React.Fragment>
               
               )))
                } </div>           </React.Fragment>
            

        )                

      }else{
        alert ('there is something happened ,Please reload the page');
      }
    
  }
}
const mapStateToProps= state => ({
    recipes: state.recipe.recipes
})

export default connect (mapStateToProps,{getRecipe})(Recipes)