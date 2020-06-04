import axios from 'axios';

import { FETCH_REPO } from 'src/actions';

const api = (store) => (next) => (action) => {
  switch(action.type) {
    default:
      next(action);
  }
};

export default api;
