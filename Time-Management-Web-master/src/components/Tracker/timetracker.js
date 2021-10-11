import React, { Component } from 'react'
import InputBar from './InputBar'
import TrackerCardValue from './TrackerCardValue'
import { Container,Row,Col } from 'react-bootstrap';

export default class timetracker extends Component {
  render() {
    return (
      <Container  style={{background:'#EFF4F7',height:'100%'}} >
        <Row>
        <Col lg={12} ><InputBar/></Col>
        <Col lg={12}><TrackerCardValue/></Col>
        </Row>
      </Container>
      
    )
  }
}
