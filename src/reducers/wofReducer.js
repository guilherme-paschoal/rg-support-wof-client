export default function reducer(state = {
  engineers: []
}, action) {
  switch(action.type) {
    case 'SPIN_WHEEL_OF_FATE': 
      return {
        engineers: action.payload
      }
    
    default:
      return state;
  }
}