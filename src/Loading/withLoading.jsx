import React, { memo } from 'react';
import Loading from './Loading';

const withLoading = Component => memo((props) => {
  const { isLoading, ...otherProps } = props;
  if (!isLoading) return (<Component {...otherProps} />);
  return (<Loading />);
});

export default withLoading;
