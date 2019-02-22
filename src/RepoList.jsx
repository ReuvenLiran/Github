import React, { memo } from 'react';
import PropTypes from 'prop-types';


const RepoList = memo((props) => {
  const {
    repos,
  } = props;
  return (
    <ul>
      {repos.map(repo => <li>{JSON.stringify(repo)}</li>)}
    </ul>
  );
});

RepoList.propTypes = {
  repos: PropTypes.array,
};
export default RepoList;
