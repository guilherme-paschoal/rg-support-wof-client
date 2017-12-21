import { combineReducers } from 'redux'
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

export default wheelOfFateReducer;

