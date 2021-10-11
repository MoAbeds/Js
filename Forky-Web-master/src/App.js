import React, { Component } from 'react';
import RenderAll from './components/RenderAll';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Container,Row,Col,Card } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <React.Fragment>
      <Container className="appcontainer" >

        <Row>
          <Col style={{height:'200vh'}}>
              <RenderAll/>
                
             
          </Col>
        </Row>
      </Container>
      </React.Fragment>
      </Provider>
    );
  }
}

export default App;
