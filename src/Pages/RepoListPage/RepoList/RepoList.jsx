import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  REPO_SHAPE,
} from 'types';
import RepoItem from './RepoItem/RepoItem.container';

const RepoList = memo((props) => {
  const {
    repoList,
  } = props;
  return (
    <ul className="repo-list">
      {repoList.map(repo => (
        <li
          className="repo-item"
          key={repo.id}
        >
          <RepoItem {...repo} />
        </li>
      ))}
    </ul>
  );
});

RepoList.propTypes = {
  repoList: PropTypes.arrayOf(REPO_SHAPE),
};

RepoList.defaultProps = {
  repoList: [],
};
export default RepoList;
