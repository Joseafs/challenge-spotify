import initialState from './initialState';
import * as types from '../actions/actionTypes';
import update from 'immutability-helper';

const albumView = (state = initialState.albumView, action) => {
  switch (action.type) {
    case types.GET_ALBUM_OK:
      return update(state.info, { title: { $set: action.title } });

    default:
      return state;
  }
};

export default albumView;
