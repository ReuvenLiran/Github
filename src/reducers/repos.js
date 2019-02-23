import {
  STORE_REPOS,
  SET_LOADING,
  SELECT_REPO,
} from 'actions';

const initalState = {
  repoList: [],
  selectedId: '',
  isLoading: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case STORE_REPOS: {
      const {
        repoList,
        isLoading,
      } = action;
      return ({
        ...state,
        repoList,
        isLoading,
      });
    }
    case SET_LOADING: {
      const {
        repoList,
        isLoading,
      } = action;
      return ({
        ...state,
        repoList,
        isLoading,
      });
    }
    case SELECT_REPO: {
      const {
        selectedId,
      } = action;
      return ({
        ...state,
        selectedId,
      });
    }
    default:
      return state;
  }
};
