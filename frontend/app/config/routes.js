import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import LandingPage from '../containers/LandingPage';
import HomePage from '../containers/HomePage';
import ArkhamKnightPage from '../containers/ArkhamKnightPage';
import CsGoPage from '../containers/CsGoPage';
import LeagueOfLegendsPage from '../containers/LeagueOfLegendsPage';

const routes = (
  <Router history={hashHistory}>
  <Route path='/' component={Main}>
  <IndexRoute component={LandingPage} />
  <Route path='HomePage' component={HomePage} />
  <Route path='ArkhamKnightPage' component={ArkhamKnightPage} />
  <Route path='CsGoPage' component={CsGoPage} />
  <Route path='LeagueOfLegendsPage' component={LeagueOfLegendsPage} />
  </Route>
  </Router>
)

export default routes;
