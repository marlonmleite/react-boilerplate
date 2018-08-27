import { fork, all } from 'redux-saga/effects'
import exampleSaga from 'containers/Example/state/saga'

function* sagas() {
  yield all([
    fork(exampleSaga),
  ])
}

export default sagas
