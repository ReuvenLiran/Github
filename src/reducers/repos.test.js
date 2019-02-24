import {
  STORE_REPOS,
  SET_LOADING,
  SELECT_REPO,
  SET_ERROR,
} from 'actions';
import reducer from './repos';

const initalState = {
  repoList: [],
  selectedId: '',
  status: '',
};


const testInitalState = () => {
  expect(reducer(initalState, {}))
    .toEqual(initalState);
};
const testStoreRepos = () => {
  const repoList = ['q', 'b'];
  const status = 'bla';
  const storeReposResult = reducer(initalState, {
    type: STORE_REPOS,
    repoList,
    status,
  });
  expect(storeReposResult)
    .toHaveProperty(['repoList'], repoList);
  expect(storeReposResult)
    .toHaveProperty(['status'], status);
};

const testSetLoading = () => {
  const status = 'loading';
  const setLoadingResult = reducer(initalState, {
    type: SET_LOADING,
    status,
  });
  expect(setLoadingResult).toHaveProperty(['status'], status);
  expect(setLoadingResult).toHaveProperty(['repoList'], []);
};
const testSetError = () => {
  const status = 'error';
  expect(reducer(initalState, {
    type: SET_ERROR,
    status,
  })).toHaveProperty(['status'], status);
};
const testSelectRepo = () => {
  const selectedId = 'bla';
  expect(reducer(initalState, {
    type: SELECT_REPO,
    selectedId,
  })).toHaveProperty(['selectedId'], selectedId);
};

describe('Test Repos Reducer', () => {
  test('Test InitalState', testInitalState);
  test('Test StoreRepos', testStoreRepos);
  test('Test SetLoading', testSetLoading);
  test('Test SelectRepo', testSelectRepo);
  test('Test SetError', testSetError);
});
