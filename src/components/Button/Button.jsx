import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = memo((props) => {
  const {
    className,
    ...other
  } = props;
  return (
    <button
      type="button"
      className={classNames('btn', className)}
      {...other}
    />
  );
});

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
