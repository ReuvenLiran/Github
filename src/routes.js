import React from 'react';
import {
  REPOS_PAGE,
  REPO_PAGE,
} from 'consts';
import { withSearch } from './Header';
import { withLoading } from './Loading';
import { RepoList } from './Repos';

const RepoListWithLoading = withLoading(RepoList);
const RepoListWithSearch = withSearch(RepoListWithLoading);

const MAIN_ROUTE = {
  component: RepoListWithSearch,
  exact: true,
  path: REPOS_PAGE,
};

const REPO_ROUTE = {
  component: (props) => {
    console.log(props);
    const {
      match: {
        params: {
          id,
        },
      },
    } = props;
    return (
<div>
Repo:
{' '}
{id}
</div>
);
  },
  exact: true,
  path: `${REPO_PAGE}/:id`,
};

export default [
  MAIN_ROUTE,
  REPO_ROUTE,
];
