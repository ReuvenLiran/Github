import {
  STATUS_SUCCESS,
  STATUS_ERROR,
  STATUS_LOADING,
} from 'consts';

export const STORE_REPOS = 'STORE_REPOS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SELECT_REPO = 'SELECT_REPO';

export const storeRepos = repoList => ({
  type: STORE_REPOS,
  repoList,
  status: STATUS_SUCCESS,
});

export const setError = () => ({
  type: SET_ERROR,
  status: STATUS_ERROR,
});

export const setLoading = () => ({
  type: SET_LOADING,
  status: STATUS_LOADING,
});

export const selectRepo = selectedId => ({
  type: SELECT_REPO,
  selectedId,
});
