import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { search } from '../services';
import HeaderView from './Header';

const withSearch = WrappedComponent => class extends PureComponent {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      repos: [],
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange(e) {
    const {
      target: {
        value: searchTerm,
      },
    } = e;
    this.setState({
      searchTerm,
    });
  }

  async onSearch() {
    const {
      searchTerm,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // setTimeout(async () => {
      const repos = await search(searchTerm);
      this.setState({
        repos,
        isLoading: false,
      });
    // }, 200000);
  }

  render() {
    const {
      searchTerm,
      repos,
      isLoading,
    } = this.state;
    return (
      <div className="page-with-header">
        <HeaderView
          onChange={this.onChange}
          onSearch={this.onSearch}
          searchTerm={searchTerm}
        />
        <WrappedComponent
          isLoading={isLoading}
          repos={repos}
        />
      </div>
    );
  }
};

export default withSearch;