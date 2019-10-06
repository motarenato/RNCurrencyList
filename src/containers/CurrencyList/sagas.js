import {all, call, put, takeLatest} from 'redux-saga/effects'

import {getCurrencyList} from './actions'
import {actions} from './constants'
import {fetchCryptocurrencyList} from '../../api'

function* agencyRequested() {
  try {
    const list = yield call(fetchCryptocurrencyList)
    yield put(getCurrencyList(list))
  } catch (error) {
    console.log(error)
  }
}

function* watchAgencyRequest() {
  yield takeLatest(actions.REQUEST_GET_CURRENCY_LIST, agencyRequested)
}

function* sagas() {
  yield all([watchAgencyRequest()])
}

export {sagas}
