import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = memo((props) => {
  const {
    className,
    ...other
  } = props;
  return (
    <a
      className={classNames('btn', className)}
      {...other}
    />
  );
});

Link.propTypes = {
  className: PropTypes.string,
};

Link.defaultProps = {
  className: '',
};

export default Link;
