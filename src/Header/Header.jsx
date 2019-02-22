import React, { memo } from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

const Header = memo((props) => {
  const {
    searchTerm,
    onSearch,
    onChange,
  } = props;
  return (
    <header className="header">
      <SearchInput
        onChange={onChange}
        searchTerm={searchTerm}
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
};

export default Header;
