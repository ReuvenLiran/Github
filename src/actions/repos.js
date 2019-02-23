export const STORE_REPOS = 'STORE_REPOS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SELECT_REPO = 'SELECT_REPO';

const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';
const STATUS_LOADING = 'loading';

export const storeRepos = repoList => ({
  type: STORE_REPOS,
  repoList,
  status: STATUS_SUCCESS,
  isLoading: false,
});

export const setError = () => ({
  type: SET_ERROR,
  status: STATUS_ERROR,
});

export const setLoading = () => ({
  type: SET_LOADING,
  isLoading: true,
  status: STATUS_LOADING,
  repoList: [],
});

export const selectRepo = selectedId => ({
  type: SELECT_REPO,
  selectedId,
});
