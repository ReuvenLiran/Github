import { connect } from 'react-redux';
import Repo from './Repo';

const mapStateToProps = (state) => {
  const {
    repos: {
      repoList,
      selectedId,
    },
  } = state;
  const { url } = repoList.find(r => r.id === selectedId);
  return ({ url });
};
export default connect(mapStateToProps)(Repo);
