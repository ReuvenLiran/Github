import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const withLoading = (Component) => {
  const WithLoading = memo((props) => {
    const { isLoading, ...otherProps } = props;
    if (!isLoading) return (<Component {...otherProps} />);
    return (<Loading />);
  });

  WithLoading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  return WithLoading;
};

export default withLoading;
