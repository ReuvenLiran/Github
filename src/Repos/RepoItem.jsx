import React, { memo } from 'react';
import {
  REPO_OBJECT_SHAPE,
} from 'types';

const RepoItem = memo((props) => {
  const {
    stars,
    repo,
    description,
  } = props;
  return (
    <div>
      <span>
        {repo}
      </span>
      <span>
        {description}
      </span>
      <span>
        {stars}
      </span>
    </div>
  );
});

RepoItem.propTypes = REPO_OBJECT_SHAPE;

export default RepoItem;
