export const REMOVE_ROOT = 'REMOVE_ROOT';
export const SHOW_NAVBAR = 'SHOW_NAVBAR';
export const SHOW_HOME = 'SHOW_HOME';
export const FETCH_REPOS = 'FETCH_REPOS';
export const SAVE_REPOS = 'SAVE_REPOS';
export const FETCH_CORRECT_LANGUAGE = 'FETCH_CORRECT_LANGUAGE';
export const SAVE_CORRECT_LANGUAGE = 'SAVE_CORRECT_LANGUAGE';

export const removeRoot = () => ({
  type: REMOVE_ROOT,
});

export const showNavbar = () => ({
  type: SHOW_NAVBAR,
});

export const showHome = () => ({
  type: SHOW_HOME,
});

export const fetchRepos = () => ({
  type: FETCH_REPOS,
});

export const saveRepos = (repos) => ({
  type: SAVE_REPOS,
  repos,
});

export const fetchCorrectLanguage = (language) => ({
  type: FETCH_CORRECT_LANGUAGE,
  language,
});

export const saveCorrectLanguage = (repoLanguage, language) => ({
  type: SAVE_CORRECT_LANGUAGE,
  repoLanguage,
  language,
});
