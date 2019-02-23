import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  mapDispatchToProps,
} from './utils';
import Search from './Search';

const withSearch = (WrappedComponent) => {
  class WithSearch extends PureComponent {
    static propTypes = {
      setLoading: PropTypes.func.isRequired,
      searchRepos: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        searchTerm: '',
        sortBy: 'stars',
      };
      this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
      this.onSearch = this.onSearch.bind(this);
      this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    onChangeSearchTerm(e) {
      const {
        target: {
          value: searchTerm,
        },
      } = e;
      this.setState({
        searchTerm,
      });
    }

    onChangeFilter({ value: sortBy }) {
      this.setState({
        sortBy,
      });
    }

    async onSearch() {
      const {
        sortBy,
        searchTerm,
      } = this.state;
      const {
        setLoading,
        searchRepos,
      } = this.props;
      setLoading();
      searchRepos(searchTerm, sortBy);
    }

    render() {
      const {
        searchTerm,
        sortBy,
      } = this.state;
      return (
        <div className="page-with-header">
          <Search
            onChangeSearchTerm={this.onChangeSearchTerm}
            onSearch={this.onSearch}
            searchTerm={searchTerm}
            onChangeFilter={this.onChangeFilter}
            sortBy={sortBy}
          />
          <WrappedComponent
            {...this.props}
          />
        </div>
      );
    }
  }
  return connect(null, mapDispatchToProps)(WithSearch);
};

export default withSearch;
