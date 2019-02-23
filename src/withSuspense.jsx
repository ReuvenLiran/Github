import React, { Suspense } from 'react';

const withSuspense = Comp => props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Comp {...props} />
  </Suspense>
);

export default withSuspense;
