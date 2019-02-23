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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoList: [],
      selectedId: '',
      selectRepo: this.selectRepo.bind(this),
    };
  }

  selectRepo(selectedId) {
    this.setState({
      selectedId,
    });
  }

  render() {
    return (
      <div className="App">
        {/* <RepoContext.Provider value={this.state}> */}
          <Switch>
            {renderRoute(ROUTES)}
          </Switch>
        {/* </RepoContext.Provider> */}
      </div>
    );
  }
}

export default withRouter(App);
