'use strict';

import { BUY_ACORN, EAT_ACORN } from '../actions/acorn-actions';

const initialState = {
  acorns: 0,
};

const acornReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ACORN:
      return Object.assign({}, state, {
        acorns: state.acorns + action.amount,
      });
    case EAT_ACORN:
      return Object.assign({}, state, {
        acorns: state.acorns - action.amount,
      });
    default:
      return state;
  };
};

export default acornReducer;