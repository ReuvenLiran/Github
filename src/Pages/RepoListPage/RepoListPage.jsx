import { connect } from 'react-redux';
import { withSearch } from '../../Search';
import { withLoading } from '../../Loading';
import { withError } from '../../Error';
import { RepoList } from './RepoList';

const mapStateToProps = state => ({
  repoList: state.repos.repoList,
  isLoading: state.repos.status === 'loading',
  isError: state.repos.status === 'error',
});

const ReposPageWithLoading = withLoading(RepoList);
const ReposPageWithError = withError(ReposPageWithLoading);
const ReposPageWithSearch = withSearch(ReposPageWithError);
const ReposPageConnected = connect(mapStateToProps)(ReposPageWithSearch);


export default ReposPageConnected;
