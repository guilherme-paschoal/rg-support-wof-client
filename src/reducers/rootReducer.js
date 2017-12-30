import { combineReducers } from 'redux'
import WheelOfFateReducer from './wheelOfFateReducer';
import ShiftReducer from './shiftsReducer';
import EngineersReducer from './engineerReducer';

const rootReducer = combineReducers({
  wheelOfFate: WheelOfFateReducer,
  shifts: ShiftReducer,
  engineers: EngineersReducer
})

export default rootReducer;