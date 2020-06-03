import { connect } from 'react-redux';
import Button from 'src/components/Navbar/Button';
import { showNavbar } from 'src/actions';

const mapStateToProps = (state) => ({
  navbarIsActive: state.navbarIsActive
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  showNavbar: () => {
    const action = showNavbar();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);
