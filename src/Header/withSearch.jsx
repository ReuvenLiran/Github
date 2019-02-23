import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  REPO_SHAPE,
} from 'types';
import {
  mapStateToProps,
  mapDispatchToProps,
} from './utils';
import Search from './Search';

const withSearch = (WrappedComponent) => {
  class WithSearch extends PureComponent {
    static propTypes = {
      repoList: PropTypes.arrayOf(REPO_SHAPE).isRequired,
      isLoading: PropTypes.bool.isRequired,
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
      const {
        repoList,
        isLoading,
      } = this.props;
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
            isLoading={isLoading}
            repos={repoList}
          />
        </div>
      );
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(WithSearch);
};

export default withSearch;
