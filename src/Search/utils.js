import {
  storeRepos,
  setLoading,
} from 'actions';

import { search } from '../services';

const searchRepos = (...args) => async (dispatch) => {
  const repos = await search(...args);
  return dispatch(storeRepos(repos));
};

export const mapStateToProps = state => ({
  repoList: state.repos.repoList,
  isLoading: state.repos.isLoading,
});

export const mapDispatchToProps = dispatch => ({
  searchRepos: (...args) => dispatch(searchRepos(...args)),
  setLoading: () => dispatch(setLoading()),
});
