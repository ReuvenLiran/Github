import React, { memo } from 'react';

const Card = memo((props) => {
  const {
    ...other
  } = props;
  return (
    <div
      className="card"
      {...other}
    />
  );
});

export default Card;
