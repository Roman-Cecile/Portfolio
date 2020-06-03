import { connect } from 'react-redux';
import ButtonApp from 'src/components/App/ButtonApp';
import { showHome } from 'src/actions';

const mapStateToProps = (state) => ({
  rootIsActive: state.rootIsActive
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  showHome: () => {
    const action = showHome();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonApp);
