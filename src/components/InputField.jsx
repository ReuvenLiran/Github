import React, { memo } from 'react';

const InputField = memo((props) => {
  const {
    ...other
  } = props;
  return (
    <input
      {...other}
      className="form-control"
    />
  );
});

export default InputField;
