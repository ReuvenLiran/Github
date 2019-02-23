import {
  STORE_REPOS,
  SET_LOADING,
  SELECT_REPO,
} from 'actions';

const initalState = {
  repoList: [],
  selectedId: '',
  loading: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case STORE_REPOS: {
      const {
        repoList,
        loading,
      } = action;
      return ({
        ...state,
        repoList,
        loading,
      });
    }
    case SET_LOADING: {
      const {
        repoList,
        loading,
      } = action;
      return ({
        ...state,
        repoList,
        loading,
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
