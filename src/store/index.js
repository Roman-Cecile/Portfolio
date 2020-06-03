import { createStore } from 'redux';

// == Import : local
import rootReducer from 'src/reducer';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const enhancers = composeEnhancers(
//   // applyMiddleware(
//   //   // api,
//   //   // secondMiddleware,
//   // ),
// );

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
);

// == Export
export default store;
