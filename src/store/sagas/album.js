import { put, call } from 'redux-saga/effects';
import { getAlbum, getSearchAlbums } from '../api/api';
import * as types from '../actions/actionTypes';

export function* getAlbumSaga(action) {
  const response = yield call(getAlbum, action.id);
  console.log('RESP:', response);

  if (!response.error) {
    yield put({ type: types.GET_ALBUM_OK, info: response });
  }
}

export function* getSearchAlbumsSaga(action) {
  const response = yield call(getSearchAlbums, action.search);

  const list = response.albums.items;

  const result = { search: action.search, list };

  if (!response.error) {
    yield put({ type: types.GET_SEARCH_ALBUMS_OK, result });
  }
}
