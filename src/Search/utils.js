import {
  storeRepos,
  setLoading,
  setError,
} from 'actions';

import { search } from '../services';

const searchRepos = (...args) => async (dispatch) => {
  try {
    const repos = await search(...args);
    if (repos) {
      dispatch(storeRepos(repos));
    }
  } catch (e) {
    dispatch(setError());
  }
};

export const mapDispatchToProps = dispatch => ({
  searchRepos: (...args) => dispatch(searchRepos(...args)),
  setLoading: () => dispatch(setLoading()),
});
