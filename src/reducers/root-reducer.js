import { combineReducers } from 'redux';
import acornReducer from './acorn-reducer';

const rootReducer = combineReducers({
  acornReducer,
});

export default rootReducer;