import { put, call } from 'redux-saga/effects'
import { getAlbums, getSearch } from '../api/api'
import * as types from '../actions/actionTypes'

export function* getAlbumsSaga() {
  const response = yield call(getAlbums)

  if (!response.error) {
    yield put({ type: types.GET_ALBUMS_OK, list: response })
  }
}

export function* getSearchSaga(action) {
  const response = yield call(getSearch, action.search)

  const list = response.albums.items

  const result = { search: action.search, list }

  if (!response.error) {
    yield put({ type: types.GET_SEARCH_OK, result })
  }
}
