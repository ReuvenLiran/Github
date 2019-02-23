import React, { memo } from 'react';
import {
  REPO_OBJECT_SHAPE,
} from 'types';
import {
  Card,
} from 'components';

const RepoItem = memo((props) => {
  const {
    stars,
    repo,
    description,
  } = props;
  return (
    <Card className="repo">
      <h5>
        <span>
          {repo}
        </span>
        <span className="star">
          {stars}
          <i className="material-icons">
          star
          </i>
        </span>
      </h5>
      <p>
        {description}
      </p>
    </Card>
  );
});

RepoItem.propTypes = REPO_OBJECT_SHAPE;

export default RepoItem;
