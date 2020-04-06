import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  mapa: mapReducer,
});

export default rootReducer;
