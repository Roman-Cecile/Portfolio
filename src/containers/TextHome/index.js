import { connect } from 'react-redux';

import TextHome from 'src/components/TextHome';
import { removeRoot } from 'src/actions';

const mapStateToProps = (state) => ({
  rootIsActive: state.rootIsActive,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  removeRoot: () => {
    const action = removeRoot();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextHome);
