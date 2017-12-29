import { combineReducers } from 'redux'
import WheelOfFateReducer from './wheelOfFateReducer';
import ShiftReducer from './shiftsReducer';

const rootReducer = combineReducers({
  wheelOfFate: WheelOfFateReducer,
  shifts: ShiftReducer
})

export default rootReducer;