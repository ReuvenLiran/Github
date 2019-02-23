import React, { memo } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import ROUTES from './routes';
import withSuspense from './withSuspense';

const renderRoute = routes => routes.map((r) => {
  const { component, ...other } = r;
  const comp = withSuspense(component);
  return (
    <Route
      key={other.path}
      {...other}
      component={comp}
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
