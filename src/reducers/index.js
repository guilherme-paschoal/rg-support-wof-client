import { combineReducers } from 'redux'
import { SPIN_WHEEL_OF_FATE, GET_WHEEL_OF_FATE, FAIL_WHEEL_OF_FATE } from '../actions';

const wheelOfFateReducer = (state = {
  people: [],
  loading: false
}, action) => {
  switch(action.type) {
    case SPIN_WHEEL_OF_FATE: 
      return { ...state, loading: true }
    case GET_WHEEL_OF_FATE:
      return { people: action.payload, loading: false }
    case FAIL_WHEEL_OF_FATE:
      return { error: action.error, loading: false }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  wheelOfFate: wheelOfFateReducer
})

export default rootReducer;