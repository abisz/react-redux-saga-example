import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';
import rootSaga from './sagas';

export default function configureStore() {
  const reducer = createReducer();

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}