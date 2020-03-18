import {createStore, applyMiddleware, compose} from 'redux';
import Asyncstorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

// Reducers
import rootReducer from './reducer/index';
import thunk from 'redux-thunk';

const initialState = {};

const persistConfig = {
  key: 'root',
  storage: Asyncstorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);

export {store, persistor};
