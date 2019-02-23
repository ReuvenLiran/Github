import React, { memo } from 'react';

// const Loading = Component => memo((props) => {
//   const { isLoading, ...otherProps } = props;
//   if (!isLoading) return (<Component {...otherProps} />);
//   return (<p>Be Hold, fetching data may take some time :)</p>);
// });


const withLoading = Component => memo((props) => {
  const { isLoading, ...otherProps } = props;
  if (!isLoading) return (<Component {...otherProps} />);
  return (<p>Loading...</p>);
});

// const withLoading = Cmponent => memo((props) => {
//   const { isLoading, ...otherProps } = props;
//   if (!isLoading) return (<Component {...otherProps} />);
//   return (<p>Be Hold, fetching data may take some time :)</p>);
// }

export default withLoading;
