import createReducer from 'utils/redux'
import { Types } from './actions'

export const initState = {
  name: '',
}

const reducer = {
  [Types.SET_NAME]: (state, { name }) => ({ ...state, name }),
}

export default createReducer(initState, reducer)
