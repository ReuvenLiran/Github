import React, { memo } from 'react';
import RepoContext from 'repoContext';

const withRepoConsumer = Comp => (otherProps) => memo(props => (
  <RepoContext.Consumer>
    {otherProps => (
      <Comp
        {...otherProps}
        {...props}
      />
    )}
  </RepoContext.Consumer>
));

export default withRepoConsumer;
