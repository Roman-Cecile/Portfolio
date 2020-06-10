import { connect } from 'react-redux';

import Navbar from 'src/components/Navbar';
import { showNavbar } from 'src/actions';

const mapStateToProps = (state) => ({
  navbarIsActive: state.navbarIsActive,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  removeNavbar: () => {
    const action = showNavbar();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
