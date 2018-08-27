import { put } from 'redux-saga/effects'
import { Actions } from '../state/actions'
import { loadName } from '../state/saga'

describe('Example saga', () => {
  it('should load name', () => {
    const saga = loadName()

    expect(saga.next().value).toEqual(put(Actions.setName('Backend')))
    expect(saga.next().done).toBe(true)
  })
})
