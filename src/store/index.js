import { createStore, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducer';
import api from '../middleware/api';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancers = composeEnhancers(
  applyMiddleware(
    api,
  //   // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
