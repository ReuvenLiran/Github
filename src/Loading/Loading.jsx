import React, { memo } from 'react';
import { Placeholder } from 'components';

const Loading = memo(() => (
  <Placeholder
    icon="sync"
    className="loading"
  >
    Loading Data
  </Placeholder>
));

export default Loading;
