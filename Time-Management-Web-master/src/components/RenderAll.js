import React, { Component } from 'react'
import LeftMenu from './Menu/LeftMenu'
import timetracker from './Tracker/timetracker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import upgrade from './Upgrade/UpGrade';
import RealWorkspace from './workspace/RealWorkspace'
import createnewworkspace from './workspace/CreateNewWorkspace'
import teampage from './Team Page/teampage';
import tagpage from './Tag/tag_page'
import clientpage from './Clients/client'
import usergroup from './UserGroup/usergroup'
import dashboard from './Dashboard/Dashboard'
import { Container,Row,Col } from 'react-bootstrap';
import settings from './settings/settings'
import { RoutedTabs, NavTab } from 'react-router-tabs';

export default class RenderAll extends Component {
  render() {
    const {match} =this.props;
    return (
      <Container fluid>
        
 
     
          <Router>
          <React.Fragment>
         
        <Row>
          <Col style={{height:'100%'}} fluid lg={2} >
          <LeftMenu/>
          </Col>
          <Col style={{height:'100%',width:'100%',background:'#EFF4F7'}} lg={9} >

          <Switch>
            <Route exact path='/tracker' component={timetracker} />
            <Route exact path='/upgrade' component={upgrade} />
            <Route exact  path='/workspaces' component={RealWorkspace} />
            <Route exact path='/workspaces/create/new' component={createnewworkspace} />
            <Route exact path='/teams' component={teampage} />
            <Route exact path='/tag' component={tagpage} />
            <Route exact path='/client' component={clientpage} />
            <Route exact path='/usergroup' component={usergroup} />
            <Route exact path='/dashboard' component={dashboard} />
            <Route exact path='/workspaces/settings' component={settings} />
            <Route path='/workspaces/settings/tags' component={tagpage} />
        
            


        </Switch>
        </Col>

        </Row>

        </React.Fragment>

        </Router>
        </Container>

    )
  }
}
