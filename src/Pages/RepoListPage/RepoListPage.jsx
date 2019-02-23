
import { withSearch } from '../../Search';
import { withLoading } from '../../Loading';
import { RepoList } from './RepoList';

const ReposPageWithLoading = withLoading(RepoList);
const ReposPageWithSearch = withSearch(ReposPageWithLoading);

export default ReposPageWithSearch;
