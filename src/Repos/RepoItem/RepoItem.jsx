import React, { memo } from 'react';
import {
  REPO_OBJECT_SHAPE,
} from 'types';
import {
  REPO_PAGE,
} from 'consts';
import {
  Card,
} from 'components';
import { withRouter } from 'react-router-dom';

const RepoItem = memo((props) => {
  const {
    stars,
    repo,
    description,
    history,
    id,
  } = props;
  const path = `${REPO_PAGE}/${id}`;
  console.log(path);
  return (
    <Card
      className="repo"
      onClick={() => history.push(path)}
    >
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

export default withRouter(RepoItem);
