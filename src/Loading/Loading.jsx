import React, { memo } from 'react';

const Loading = memo(() => (
  <div className="loading">
    Loading Data
    <i className="material-icons">
      sync
    </i>
  </div>
));

export default Loading;
