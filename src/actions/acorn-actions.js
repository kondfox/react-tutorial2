'use strict';

export const BUY_ACORN = 'BUY_ACORN';
export const EAT_ACORN = 'EAT_ACORN';

export const buyAcorn = (amount) => {
  return { type: BUY_ACORN, amount }
}

export const eatAcorn = (amount) => {
  return { type: EAT_ACORN, amount }
}