import { connect } from 'react-redux';
import Project from 'src/components/Project';
import { fetchRepos, fetchCorrectLanguage } from 'src/actions';

const mapStateToProps = (state) => ({
  repos: state.listRepos,
  navbarIsActive: state.navbarIsActive,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: () => {
    const action = fetchRepos();
    dispatch(action);
  },

  fetchCorrectLanguage: (language) => {
    const action = fetchCorrectLanguage(language);
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
