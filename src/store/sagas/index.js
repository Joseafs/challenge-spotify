import { fork, all } from 'redux-saga/effects'
import { watchGetAlbums, watchGetSearch } from './watchers'

export default function* rootSaga() {
  yield all([fork(watchGetAlbums)])
  yield all([fork(watchGetSearch)])
}
