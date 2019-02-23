import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = memo((props) => {
  const {
    className,
    children,
    ...other
  } = props;
  return (
    <a
      className={classNames('btn', className)}
      {...other}
    >
      {children}
    </a>
  );
});

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: '',
};

export default Link;
