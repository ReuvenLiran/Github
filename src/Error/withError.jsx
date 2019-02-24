import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const withError = (Component) => {
  const WithError = memo((props) => {
    const { isError, ...otherProps } = props;
    if (!isError) return (<Component {...otherProps} />);
    return (<Error />);
  });

  WithError.propTypes = {
    isError: PropTypes.bool.isRequired,
  };

  return WithError;
};

export default withError;
