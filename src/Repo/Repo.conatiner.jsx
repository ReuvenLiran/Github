import { connect } from 'react-redux';
import Repo from './Repo';

const mapStateToProps = (state) => {
  const {
    repos: {
      repoList,
      selectedId,
    },
  } = state;
  const selectedRepo = repoList.find(r => r.id === selectedId) || {};
  const {
    url = '',
    name = '',
  } = selectedRepo;
  return ({
    url,
    name,
  });
};
export default connect(mapStateToProps)(Repo);
