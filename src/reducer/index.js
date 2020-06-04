import {
  REMOVE_ROOT,
  SHOW_NAVBAR,
  SHOW_HOME,
  SAVE_REPOS,
  SAVE_CORRECT_LANGUAGE,
} from 'src/actions';

export const initialState = {
  rootIsActive: true,
  navbarIsActive: false,
  listRepos: [],
  loading: true,
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
      };
    }
    case SAVE_REPOS: {
      return {
        ...state,
        listRepos: action.repos,
        loading: false,
      };
    }
    case SAVE_CORRECT_LANGUAGE: {
      const correctLanguages = action.repoLanguage.filter((repo) => repo.language === action.language);
      return {
        ...state,
        listRepos: correctLanguages,
      };
    }
    default:
      return state;
  }
};

export default reducer;
