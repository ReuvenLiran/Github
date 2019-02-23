import {
  STORE_REPOS,
  SET_LOADING,
  SELECT_REPO,
  SET_ERROR,
} from 'actions';

const initalState = {
  repoList: [],
  selectedId: '',
  isLoading: false,
  status: '',
};

export default (state = initalState, action) => {
  switch (action.type) {
    case STORE_REPOS: {
      const {
        repoList,
        isLoading,
        status,
      } = action;
      return ({
        ...state,
        repoList,
        status,
        isLoading,
      });
    }
    case SET_LOADING: {
      const {
        repoList,
        isLoading,
        status,
      } = action;
      return ({
        ...state,
        repoList,
        isLoading,
        status,
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
    case SET_ERROR: {
      const { status } = action;
      return ({
        ...state,
        status,
      });
    }
    default:
      return state;
  }
};
