import {reducers as listReducer} from '../containers/CurrencyList/reducers';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  listState: listReducer,
});

export {reducers}