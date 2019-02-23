import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchButton, Filter } from './parts';

const Header = memo((props) => {
  const {
    searchTerm,
    onSearch,
    onChangeSearchTerm,
    onChangeFilter,
    sortBy,
  } = props;
  return (
    <header className="header">
      <SearchInput
        onChange={onChangeSearchTerm}
        searchTerm={searchTerm}
      />
      <Filter
        onSelect={onChangeFilter}
        sortBy={sortBy}
      />
      <SearchButton
        onClick={onSearch}
      />
    </header>
  );
});

Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChangeSearchTerm: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default Header;
