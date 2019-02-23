import React, { Component, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ROUTES from 'routes';
import { withRouter } from 'react-router-dom';
import RepoContext from './repoContext';

import withSuspense from './withSuspense';


const renderRoute = routes => routes.map((r) => {
  const { component, ...other } = r;
  return (
    <Route
      {...other}
      component={withSuspense(component)}
    />
  );
});

const App = memo(() => (
  <div className="App">
    <Switch>
      {renderRoute(ROUTES)}
    </Switch>
  </div>
));

export default withRouter(App);
