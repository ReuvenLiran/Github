import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'components';

const OPTIONS = [{
  value: 'stars',
  label: 'Stars',
}, {
  value: 'forks',
  label: 'Forks',
}, {
  value: 'updated',
  label: 'Updated',
}];

const Filter = memo((props) => {
  const {
    onSelect,
    sortBy,
  } = props;
  return (
    <Select
      onSelect={onSelect}
      selected={sortBy}
      options={OPTIONS}
    />
  );
});

Filter.propTypes = {
  onSelect: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default Filter;
