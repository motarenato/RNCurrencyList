import {actions} from './constants'
import {createAction} from 'redux-actions'

export const requestGetCurrencyList = createAction(actions.REQUEST_GET_CURRENCY_LIST)
export const getCurrencyList = createAction(actions.GET_CURRENCY_LIST)
