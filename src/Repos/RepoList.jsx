import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  REPO_SHAPE,
} from 'types';
import RepoItem from './RepoItem';

const RepoList = memo((props) => {
  const {
    repos,
  } = props;
  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>
          <RepoItem {...repo} />
        </li>
      ))}
    </ul>
  );
});

RepoList.propTypes = {
  repos: PropTypes.arrayOf(REPO_SHAPE),
};

RepoList.defaultProps = {
  repos: [],
};
export default RepoList;
