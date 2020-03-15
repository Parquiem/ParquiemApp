import {ROOT_CHANGED} from './actionTypes';
import {INITIAL} from './screenDefinitions';

export const changeAppRoot = root => {
  return {
    type: ROOT_CHANGED,
    root,
  };
};

export const appInitialized = () => async (dispatch, getState) => {
  dispatch(changeAppRoot(INITIAL));
};
