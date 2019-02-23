import { createContext } from 'react';

export default createContext({
  repoList: [],
  selectedId: '',
  selectRepo: () => {},
});
