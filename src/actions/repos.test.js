import {
  STORE_REPOS,
  storeRepos,
  setError,
  SET_ERROR,
  setLoading,
  SET_LOADING,
  selectRepo,
  SELECT_REPO,
} from './repos';

const testStoreRepos = () => {
  const repoList = ['bla1', 'bla2'];
  const result = storeRepos(repoList);
  expect(result).toEqual({
    type: STORE_REPOS,
    repoList,
    status: 'success',
  });
};
const testSetError = () => {
  const result = setError();
  expect(result).toEqual({
    type: SET_ERROR,
    status: 'error',
  });
};
const testSetLoading = () => {
  const result = setLoading();
  expect(result).toEqual({
    type: SET_LOADING,
    status: 'loading',
  });
};
const testSelectRepo = () => {
  const result = selectRepo('bla');
  expect(result).toEqual({
    type: SELECT_REPO,
    selectedId: 'bla',
  });
};

describe('Test Repos Actions', () => {
  test('testStoreRepos', testStoreRepos);
  test('testSetError', testSetError);
  test('testSetLoading', testSetLoading);
  test('testSelectRepo', testSelectRepo);
});
