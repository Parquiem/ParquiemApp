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

export const register = ({name, email, phoneNumber, password}) => dispatch => {
  //Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  const body = JSON.stringify({name, email, phoneNumber, password});

  axios
    .post('http://127.0.0.1:5000/api/users/register', body, config)
    .then(res => dispatch({type: REGISTER_SUCCESS, payload: res.data}))
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, REGISTER_FAIL),
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};
