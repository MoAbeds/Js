import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import RenderAll from './components/RenderAll'

class App extends Component {
  render() {
    return (
       <Provider store={store}>
       <RenderAll/>
      </Provider>
    );
  }
}

export default App;
