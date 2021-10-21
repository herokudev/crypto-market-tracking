import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currencyReducer from './currencies';

export const reducer = combineReducers({
  currency: currencyReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
