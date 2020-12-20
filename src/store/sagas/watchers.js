import { takeLatest } from 'redux-saga/effects'
import * as types from '../actions/actionTypes'
import { getAlbumsSaga } from './album'

// ALBUMS
export function* watchGetAlbums() {
  yield takeLatest(types.GET_ALBUMS_RQ, getAlbumsSaga)
}
