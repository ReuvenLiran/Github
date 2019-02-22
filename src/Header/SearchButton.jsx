import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';

const SearchButton = memo((props) => {
  const {
    onClick,
  } = props;
  return (
    <Button onClick={onClick}>
      Search
    </Button>
  );
});

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
