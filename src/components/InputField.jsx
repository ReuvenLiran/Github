import React, { memo } from 'react';
import PropTypes from 'prop-types';

const InputField = memo((props) => {
  const {
    label,
    ...other
  } = props;
  return (
    <input
      {...other}
      className="form-control"
    />
  );
});

InputField.propTypes = {
  label: PropTypes.node.isRequired,
};

export default InputField;
