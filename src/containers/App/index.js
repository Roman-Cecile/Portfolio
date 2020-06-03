import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  rootIsActive: state.rootIsActive,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
