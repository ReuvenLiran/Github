import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  storeRepos,
  setLoading,
} from 'actions';

import { search } from '../services';
import HeaderView from './Header';

const searchRepos = (...args) => async (dispatch) => {
  const repos = await search(...args);
  return dispatch(storeRepos(repos));
};

const mapStateToProps = state => ({
  repoList: state.repos.repoList,
  isLoading: state.repos.isLoading,
});

const mapDispatchToProps = dispatch => ({
  searchRepos: (...args) => dispatch(searchRepos(...args)),
  setLoading: () => dispatch(setLoading()),
});


const withSearch = (WrappedComponent) => {
  class Search extends PureComponent {
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
      const {
        repoList,
        isLoading,
      } = this.props;
      return (
        <div className="page-with-header">
          <HeaderView
            onChangeSearchTerm={this.onChangeSearchTerm}
            onSearch={this.onSearch}
            searchTerm={searchTerm}
            onChangeFilter={this.onChangeFilter}
            sortBy={sortBy}
          />
          <WrappedComponent
            isLoading={isLoading}
            repos={repoList}
          />
        </div>
      );
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(Search);
};

export default withSearch;
