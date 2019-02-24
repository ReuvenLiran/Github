import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import {
  REPO_OBJECT_SHAPE,
} from 'types';
import {
  REPO_PAGE,
} from 'consts';
import {
  Card,
} from 'components';

const RepoItem = memo((props) => {
  const {
    stars,
    repo,
    description,
    history,
    id,
    selectRepo,
  } = props;
  const path = `${REPO_PAGE}/${id}`;
  return (
    <Card
      className="repo-card"
      onClick={() => {
        history.push(path);
        selectRepo(id);
      }}
    >
      <h5 className="repo-header">
        <span className="name">
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
