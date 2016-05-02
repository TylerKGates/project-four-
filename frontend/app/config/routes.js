import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import LandingPage from '../containers/LandingPage';
import HomePage from '../containers/HomePage';

const routes = (
  <Router history={hashHistory}>
  <Route path='/' component={Main}>
  <IndexRoute component={LandingPage} />
  <Route path='HomePage' component={HomePage} />
  </Route>
  </Router>
)

export default routes;
