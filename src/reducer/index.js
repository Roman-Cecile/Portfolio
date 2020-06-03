import { REMOVE_ROOT, SHOW_NAVBAR, SHOW_HOME } from 'src/actions';

export const initialState = {
  rootIsActive: true,
  navbarIsActive: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REMOVE_ROOT: {
      return {
        ...state,
        rootIsActive: !state.rootIsActive,
      };
    }
    case SHOW_NAVBAR: {
      return {
        ...state,
        navbarIsActive: !state.navbarIsActive,
      };
    }
    case SHOW_HOME: {
      return {
        ...state,
        rootIsActive: !state.rootIsActive,
      }
    }
    default:
      return state;
  }
};

export default reducer;
