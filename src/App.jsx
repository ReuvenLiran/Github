import React, { Component, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ROUTES from 'routes';
import { withRouter } from 'react-router-dom';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {renderRoute(ROUTES)}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
