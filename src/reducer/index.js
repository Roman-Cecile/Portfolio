import { REMOVE_ROOT } from 'src/actions';

export const initialState = {
  rootIsActive: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REMOVE_ROOT: {
      return {
        ...state,
        rootIsActive: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
