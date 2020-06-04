export const REMOVE_ROOT = 'REMOVE_ROOT';
export const SHOW_NAVBAR = 'SHOW_NAVBAR';
export const SHOW_HOME = 'SHOW_HOME';
export const FETCH_REPO = 'FETCH_REPO';

export const removeRoot = () => ({
  type: REMOVE_ROOT,
});

export const showNavbar = () => ({
  type: SHOW_NAVBAR,
});

export const showHome = () => ({
  type: SHOW_HOME,
});

export const fetchRepo = () => ({
  type: FETCH_REPO,
})
