import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withSearch from './Header/Header.container';

const List = withSearch(props => <div>{props.searchTerm}</div>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
