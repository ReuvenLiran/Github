import {
  STORE_REPOS,
  SET_LOADING,
  SELECT_REPO,
  SET_ERROR,
} from 'actions';

const initalState = {
  repoList: [],
  selectedId: '',
  status: '',
};

export default (state = initalState, action) => {
  switch (action.type) {
    case STORE_REPOS: {
      const {
        repoList,
        status,
      } = action;
      return ({
        ...state,
        repoList,
        status,
      });
    }
    case SET_LOADING: {
      const {
        status,
      } = action;
      return ({
        ...state,
        repoList: [],
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
