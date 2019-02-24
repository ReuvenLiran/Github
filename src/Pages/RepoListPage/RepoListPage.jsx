import { connect } from 'react-redux';
import {
  STATUS_ERROR,
  STATUS_LOADING,
} from 'actions';
import { withSearch } from '../../Search';
import { withLoading } from '../../Loading';
import { withError } from '../../Error';
import { RepoList } from './RepoList';

const mapStateToProps = state => ({
  repoList: state.repos.repoList,
  isLoading: state.repos.status === STATUS_LOADING,
  isError: state.repos.status === STATUS_ERROR,
});

const ReposPageWithLoading = withLoading(RepoList);
const ReposPageWithError = withError(ReposPageWithLoading);
const ReposPageWithSearch = withSearch(ReposPageWithError);
const ReposPageConnected = connect(mapStateToProps)(ReposPageWithSearch);

export default ReposPageConnected;
