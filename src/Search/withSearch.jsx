import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  mapDispatchToProps,
} from './utils';
import Search from './Search';

const SERACH_TERM_KEY = 'searchTerm';
const SORT_BY_KEY = 'sortBy';

const withSearch = (WrappedComponent) => {
  class WithSearch extends PureComponent {
    static propTypes = {
      setLoading: PropTypes.func.isRequired,
      searchRepos: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props);
      const searchTerm = localStorage.getItem(SERACH_TERM_KEY) || '';
      const sortBy = localStorage.getItem(SORT_BY_KEY) || 'stars';
      this.state = {
        searchTerm,
        sortBy,
      };
      this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
      this.onSearch = this.onSearch.bind(this);
      this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    componentDidMount() {
      const { searchTerm } = this.state;
      if (searchTerm.length > 0) {
        this.onSearch();
      }
    }

    onChangeSearchTerm(e) {
      const {
        target: {
          value: searchTerm,
        },
      } = e;
      localStorage.setItem(SERACH_TERM_KEY, searchTerm);
      this.setState({
        searchTerm,
      });
    }

    onChangeFilter({ value: sortBy }) {
      localStorage.setItem(SORT_BY_KEY, sortBy);
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
