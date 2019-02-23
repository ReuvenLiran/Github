import {
  REPOS_PAGE,
  REPO_PAGE_PATH,
} from 'consts';
import {
  RepoListPage,
  RepoPage,
} from './pages';

const MAIN_ROUTE = {
  component: RepoListPage,
  exact: true,
  path: REPOS_PAGE,
};

const REPO_ROUTE = {
  component: RepoPage,
  exact: true,
  path: REPO_PAGE_PATH,
};

export default [
  MAIN_ROUTE,
  REPO_ROUTE,
];
