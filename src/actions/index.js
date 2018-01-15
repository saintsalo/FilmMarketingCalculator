import { actionTypes } from '../constants'

export function updateCalculations(amounts) {
  return {
    type: actionTypes.UPDATE_ENTERED_VALUES,
    payload: amounts
  };
}
