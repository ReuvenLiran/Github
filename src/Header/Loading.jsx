import React from 'react';

const withLoading = Component => (props) => {
  console.log(props, Component);
  const { isLoading, ...otherProps } = props;
  if (!isLoading) return (<Component {...otherProps} />);
  return (<p>Be Hold, fetching data may take some time :)</p>);
};

export default withLoading;
