import axios from 'axios';

import { FETCH_REPOS, saveRepos, FETCH_CORRECT_LANGUAGE, saveCorrectLanguage } from 'src/actions';


const api = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_REPOS:
      axios.get('https://api.github.com/users/Roman-Cecile/repos')
        .then((response) => {
          // console.log(response.data);
          const listRepos = response.data;
          store.dispatch(saveRepos(listRepos));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    case FETCH_CORRECT_LANGUAGE:
      axios.get('https://api.github.com/users/Roman-Cecile/repos')
        .then((response) => {
          // console.log(response.data);
          const listRepos = response.data;
          store.dispatch(saveCorrectLanguage(listRepos, action.language));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
      next(action);
  }
};

export default api;
