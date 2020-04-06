import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
} from './actionTypes';
import setNavigationRoot from '../services/setNavigationRoot';
import axios from 'axios';
import {persistor, store} from '../store';

export const register = ({
  name,
  email,
  phoneNumber,
  password,
  password2,
}) => dispatch => {
  //Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  const body = JSON.stringify({name, email, phoneNumber, password, password2});

  axios
    .post(`http://www.parquiem.tech/api/users/register`, body, config)
    .then(({data}) => {
      console.log('Se pudo registrar');
      dispatch({type: REGISTER_SUCCESS, payload: data});
      setNavigationRoot(true);
    })
    .catch(err => {
      console.log('No se pudo registrar', err);
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const login = ({email, password}) => dispatch => {
  //Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  const body = JSON.stringify({email, password});

  axios
    .post(`http://www.parquiem.tech/api/users/login`, body, config)
    .then(res => {
      console.log('logueado');
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
      setNavigationRoot(true);
    })
    .catch(err => {
      console.log('No pudo loguear', err);
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => dispatch => {
  console.log('logout');
  persistor.purge();
  setNavigationRoot(false);
  dispatch({type: LOGOUT_SUCCESS});
};
