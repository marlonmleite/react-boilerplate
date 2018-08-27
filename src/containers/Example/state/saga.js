import { put, takeLatest } from 'redux-saga/effects'
import { Actions, Types } from './actions'

export function* loadName() {
  yield put(Actions.setName('Backend'))
}

export default function* root() {
  yield takeLatest(Types.LOAD_NAME, loadName)
}
