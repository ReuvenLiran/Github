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
    selected,
  } = props;
  return (
    <Select
      onSelect={onSelect}
      selected={selected}
      options={OPTIONS}
    />
  );
});

Filter.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string,
};

Filter.defaultProps = {
  selected: 'stars',
};

export default Filter;
