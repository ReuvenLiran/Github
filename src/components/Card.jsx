import React, { memo } from 'react';
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

export default Card;
