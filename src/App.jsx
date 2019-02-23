import React, { Component } from 'react';
import './App.css';
import withSearch from './Header/Header.container';
import { withLoading } from './Loading';
import { RepoList } from './Repos';

const RepoListWithLoading = withLoading(RepoList);
const RepoListWithSearch = withSearch(RepoListWithLoading);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RepoListWithSearch />
      </div>
    );
  }
}

export default App;
