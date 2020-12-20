import { fork, all } from 'redux-saga/effects'
import { watchGetAlbums } from './watchers'

export default function* rootSaga() {
  yield all([fork(watchGetAlbums)])
}
