import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { AuthState } from './ducks/auth/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  auth: AuthState;
}

export const configureStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  // 3: Run your sagas on server
  sagaMiddleware.run(rootSaga);

  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper<ApplicationState>(configureStore, {
  debug: false,
});
