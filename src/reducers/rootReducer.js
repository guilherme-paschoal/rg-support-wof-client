import { combineReducers } from 'redux'
import WheelOfFateReducer from './wheelOfFateReducer';

const rootReducer = combineReducers({
  wheelOfFate: WheelOfFateReducer
})

export default rootReducer;