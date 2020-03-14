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
import {returnErrors} from './errorActions';
import axios from 'axios';

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
    .post('http://192.168.0.9:5000/api/users/register', body, config)
    .then(res => {
      console.log('Se pudo registrar');
      dispatch({type: REGISTER_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log('No se pudo registrar', err);
      // dispatch(
      //   returnErrors(err.response.data, err.response.status, REGISTER_FAIL),
      // );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};
