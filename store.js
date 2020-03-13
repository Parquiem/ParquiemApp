import {createStore, applyMiddleware, compose} from 'redux';
import storage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

// Reducers
import rootReducer from './reducer/index';
import thunk from 'redux-thunk';

const initialState = {};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const composeEnhancers = compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
