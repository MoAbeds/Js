import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Scene, Router,Stack } from 'react-native-router-flux';
import MainPageView from './MainPage/MainPageView';
import PrivacyPolicyMainView from './DrawerPages/Privacy Policy/PrivacyPolicyMainView'
import HelpPageMainView from './DrawerPages/HelpPage/HelpPageMainView'
import SearchPageView from './MainPage/SearchPage/SearchPageView'
import TodayMainView from './MainPage/TodayPage/TodayMainView'
import ShareFun from './MainPage/TodayPage/ShareFun'
export class Routes extends Component {
  render() {
    return (
      <Router>
          <Stack>
<Scene  hideNavBar key="MainPageView" >
<Scene hideNavBar key='MainPageView' component={MainPageView}  />
<Scene hideNavBar key='PrivacyPolicyView'  component={PrivacyPolicyMainView}  />
<Scene hideNavBar key='HelpPageView'  component={HelpPageMainView}  />
<Scene hideNavBar key='SearchPage'  component={SearchPageView} />
<Scene hideNavBar key='TodayMainPage' initial component={TodayMainView} />



</Scene>



          </Stack>
      </Router>
    )
  }
}

export default Routes
