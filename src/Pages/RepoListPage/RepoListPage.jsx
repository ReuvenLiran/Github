import { connect } from 'react-redux';
import { withSearch } from '../../Search';
import { withLoading } from '../../Loading';
import { RepoList } from './RepoList';

const mapStateToProps = state => ({
  repoList: state.repos.repoList,
  isLoading: state.repos.isLoading,
});

const ReposPageConnected = connect(mapStateToProps)(RepoList);
const ReposPageWithLoading = withLoading(ReposPageConnected);
const ReposPageWithSearch = withSearch(ReposPageWithLoading);

export default ReposPageWithSearch;
