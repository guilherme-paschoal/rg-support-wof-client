import { combineReducers } from 'redux'
// import { SPIN_WHEEL_OF_FATE, GET_WHEEL_OF_FATE, FAIL_WHEEL_OF_FATE } from '../actions';
import * as actions from '../constants/actionTypes';


const wheelOfFateReducer = (state = {
  people: [],
  loading: false
}, action) => {
  switch(action.type) {
    case actions.WHEEL_OF_FATE_GET: 
      return { ...state, loading: true }
    case actions.WHEEL_OF_FATE_SUCCESS:
      return { 
        people: action.payload, 
        loading: false 
      }
    case actions.WHEEL_OF_FATE_ERROR:
      return { error: action.error, loading: false }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  wheelOfFate: wheelOfFateReducer
})

export default rootReducer;