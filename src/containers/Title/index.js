import { connect } from 'react-redux';

import Title from 'src/components/Title';

const mapStateToProps = (state) => ({
  navbarIsActive: state.navbarIsActive,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Title);
