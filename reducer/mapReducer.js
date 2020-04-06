import {WATCH_PARQUIM_METER} from '../actions/actionTypes';

const initialState = {
  markers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WATCH_PARQUIM_METER:
      return {
        markers: [...state.markers, ...action.payload],
      };
    default:
      return state;
  }
};
