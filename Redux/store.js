import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware  = createSagaMiddleware();
const middlewares     = [sagaMiddleware];

const composeEnhancers =  process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 20 })
    : compose;

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);
export { store };
