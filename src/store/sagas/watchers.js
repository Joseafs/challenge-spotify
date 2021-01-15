import { takeLatest } from 'redux-saga/effects'
import * as types from '../actions/actionTypes'
import { getAlbumsSaga, getSearchSaga } from './album'

// ALBUMS
export function* watchGetAlbums() {
  yield takeLatest(types.GET_ALBUMS_RQ, getAlbumsSaga)
}

// SEARCH
export function* watchGetSearch() {
  yield takeLatest(types.GET_SEARCH_RQ, getSearchSaga)
}
