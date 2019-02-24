import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = memo((props) => {
  const {
    className,
    ...other
  } = props;
  return (
    <div
      className={classNames('card', className)}
      {...other}
    />
  );
});

Card.propTypes = {
  className: PropTypes.string,
};
Card.defaultProps = {
  className: '',
};
export default Card;
