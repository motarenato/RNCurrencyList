import {handleActions} from 'redux-actions'
import {getCurrencyList} from './actions'

const initialState = {
  cryptoList: [],
}

const reducers = handleActions(
  {
    [getCurrencyList]: (state, {payload}) => ({cryptoList: payload.data || payload}),
  },
  initialState
)

export {reducers}
