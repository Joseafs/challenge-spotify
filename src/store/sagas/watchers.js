import { takeLatest } from 'redux-saga/effects'
import * as types from '../actions/actionTypes'
import { getAlbumSaga, getSearchAlbumsSaga } from './album'

// ALBUMS
export function* watchGetAlbum() {
  yield takeLatest(types.GET_ALBUM_RQ, getAlbumSaga)
}

// SEARCH
export function* watchGetSearchAlbum() {
  yield takeLatest(types.GET_SEARCH_ALBUMS_RQ, getSearchAlbumsSaga)
}
