import { fork, all } from 'redux-saga/effects'
import { watchGetAlbum, watchGetSearchAlbum } from './watchers'

export default function* rootSaga() {
  yield all([fork(watchGetAlbum)])
  yield all([fork(watchGetSearchAlbum)])
}
