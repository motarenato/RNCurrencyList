import {all} from 'redux-saga/effects'
import {sagas as currencyListSagas} from '../containers/CurrencyList/sagas'

function* sagas() {
  yield all([currencyListSagas()])
}

export {sagas}
