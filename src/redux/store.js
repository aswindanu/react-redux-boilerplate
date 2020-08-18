import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// Enable redux devtools if server location is development
const composeEnhancers = process.env.REACT_APP_SERVER_LOCATION === 'DEV' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

// Configuration of redux persist
const persistConfig = {
  key: 'store',
  storage,
  whitelist: [],
};

// Persisting reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(applyMiddleware(thunk)),
);

// Persisting store
export const persistor = persistStore(store);

export default store;
