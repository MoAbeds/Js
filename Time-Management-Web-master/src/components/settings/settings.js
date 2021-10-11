import React, { Component } from 'react'
import { Tabs,Tab } from 'react-bootstrap';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import './settings.css';

export default class settings extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'home',
        };
      }
  render() {
    return (
        <React.Fragment >
           
           <RoutedTabs startPathWith='workspaces/settings'>

        <NavTab  to="/tags">Admins</NavTab>
        </RoutedTabs>
      </React.Fragment>
    )
  }
}
