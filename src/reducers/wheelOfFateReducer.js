import * as actions from '../constants/actionTypes';

const wheelOfFateReducer = (state = {
  shifts: [],
  loading: false
}, action) => {
  
  switch(action.type) {
    case actions.WHEEL_OF_FATE_SUCCESS:
      return { 
        shifts: action.payload, 
        loading: false 
      }
    case actions.WHEEL_OF_FATE_ERROR:
      return { error: action.error, loading: false }
    default:
      return state;
  }
}

export default wheelOfFateReducer;

