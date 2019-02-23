import { connect } from 'react-redux';
import {
  selectRepo,
} from 'actions';
import RepoItem from './RepoItem';

const mapDispatchToProps = dispatch => ({
  selectRepo: id => dispatch(selectRepo(id)),
});

export default connect(null, mapDispatchToProps)(RepoItem);
