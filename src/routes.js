import React from 'react';
import {
  REPOS_PAGE,
  REPO_PAGE_PATH,
} from 'consts';
import { withSearch } from './Header';
import { withLoading } from './Loading';
import { RepoList } from './Repos';
import Repo from './Repo/Repo.conatiner';

const RepoListWithLoading = withLoading(RepoList);
const RepoListWithSearch = withSearch(RepoListWithLoading);

const MAIN_ROUTE = {
  component: RepoListWithSearch,
  exact: true,
  path: REPOS_PAGE,
};

const REPO_ROUTE = {
  component: Repo,
  exact: true,
  path: REPO_PAGE_PATH,
};

export default [
  MAIN_ROUTE,
  REPO_ROUTE,
];
