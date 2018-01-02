import * as actions from '../constants/actionTypes';

const engineersReducer = (state = {
  engineers: [],
}, action) => {
  
  switch(action.type) {
    case actions.GET_ENGINEERS_SUCCESS:
      return { 
        engineers: action.payload, 
      }
    default:
      return state;
  }
}

export default engineersReducer;
