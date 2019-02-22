import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';

const Select = memo((props) => {
  const {
    options,
    selected,
    onSelect,
  } = props;
  return (
    <DropDown
      onChange={onSelect}
      value={selected}
      options={options}
    />
  );
});

Select.propTypes = {
  options: PropTypes.arrayOf({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Select;
