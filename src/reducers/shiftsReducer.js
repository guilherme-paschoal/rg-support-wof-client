import * as actions from '../constants/actionTypes';

const shiftReducer = (state = {
  shifts: [],
}, action) => {
  
  switch(action.type) {
    case actions.SHIFTS_HISTORY_SUCCESS:
      return { 
        shifts: action.payload, 
      }
    default:
      return state;
  }
}

export default shiftReducer;

