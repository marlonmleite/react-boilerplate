import reducer, { initState } from '../state/reducer'
import { Actions } from '../state/actions'

describe('Example reducer', () => {
  it('should change name', () => {
    const state = reducer(initState, Actions.setName('abc'))

    expect(state.name).toBe('abc')
  })
})
