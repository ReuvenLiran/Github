import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchButton, Filter } from './parts';

const Header = memo((props) => {
  const {
    searchTerm,
    onSearch,
    onChange,
    onSelect,
    selected,
  } = props;
  return (
    <header className="header">
      <SearchInput
        onChange={onChange}
        searchTerm={searchTerm}
      />
      <Filter 
        onSelect={onSelect}
        selected={selected}
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
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Header;
