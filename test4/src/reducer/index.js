import {combineReducers} from 'redux';
import productsReducer from './productsReducer';

const appReducer = combineReducers({
  productsReducer: productsReducer,
});

export default appReducer;
