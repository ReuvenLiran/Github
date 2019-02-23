import React, { Suspense, memo } from 'react';

const withSuspense = Comp => memo(props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Comp {...props} />
  </Suspense>
));

export default withSuspense;
