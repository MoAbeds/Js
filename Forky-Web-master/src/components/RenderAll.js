import React, { Component } from 'react'
import SearchBar from './searchbar'
import Recipe from './recipe';
import Recipes from './recipes';
import ShoppingList from './ShoppingList'
import LovedRecipes from './LovedRecipes'
import { Container,Row,Col,Card } from 'react-bootstrap';



export default class RenderAll extends Component {
  render() {
    return (
      <div>
          <Card style={{height:'200vh'}}>
              <Container>
                  <Row>
                      <Col xl={12}>
                      <SearchBar />
                      <LovedRecipes/>

                      </Col>
                      <Col style={{height:'200vh',marginTop:'30px'
}} ><Recipes/></Col>
                      <Col style={{background:'#F9F5F3',height:'100vh',marginTop:'30px'}} xl={7}><Recipe/></Col>
                      <Col style={{height:'200vh',marginTop:'30px'
}}  ><ShoppingList/></Col>
                  </Row>
              </Container>

          </Card>

        <div className="recipescontainer">
        </div>
      </div>
    )
  }
}
