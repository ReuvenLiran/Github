import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  storeRepos,
  setLoading,
} from 'actions';

import { search } from '../services';
import HeaderView from './Header';

const searchRepos = searchTerm => async (dispatch) => {
  const repos = await search(searchTerm);
  return dispatch(storeRepos(repos));
};

const mapStateToProps = state => ({
  repoList: state.repos.repoList,
  isLoading: state.repos.isLoading,
});

const mapDispatchToProps = dispatch => ({
  searchRepos: searchTerm => dispatch(searchRepos(searchTerm)),
  setLoading: () => dispatch(setLoading()),
});


const withSearch = (WrappedComponent) => {
  class Search extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: '',
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
      const {
        setLoading,
        searchRepos,
      } = this.props;
      setLoading();
      searchRepos(searchTerm);
    }

    render() {
      const {
        searchTerm,
      } = this.state;
      const {
        repoList,
        isLoading,
      } = this.props;
      return (
        <div className="page-with-header">
          <HeaderView
            onChange={this.onChange}
            onSearch={this.onSearch}
            searchTerm={searchTerm}
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
