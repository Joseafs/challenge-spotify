import { put, call } from 'redux-saga/effects'
import { getAlbums } from '../api/api'
import * as types from '../actions/actionTypes'

export function* getAlbumsSaga() {
  const response = yield call(getAlbums)

  if (!response.error) {
    yield put({ type: types.GET_ALBUMS_OK, list: response })
  }
}
