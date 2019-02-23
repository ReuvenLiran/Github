export const STORE_REPOS = 'STORE_REPOS';
export const SET_LOADING = 'SET_LOADING';
export const SELECT_REPO = 'SELECT_REPO';

export const storeRepos = repoList => ({
  type: STORE_REPOS,
  repoList,
  isLoading: false,
});
export const setLoading = () => ({
  type: SET_LOADING,
  isLoading: true,
  repoList: [],
});

export const selectRepo = selectedId => ({
  type: SELECT_REPO,
  selectedId,
});
