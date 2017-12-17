import axios from 'axios';

export const spinWheelOfFate = () => {
  debugger;
  return {
    type: "SPIN_WHEEL_OF_FATE",
    payload: [{asd:'asd'},{cvxc:'xcvxx'}]
  }
  // return function(dispatch) {
  //   axios.get('http://localhost:5000/WheelOfFate/Get?date=2017-12-16T00:00:00')
  //   .then((response) => {
  //     dispatch({type: "SPIN_WHEEL_OF_FATE", payload: response.data })
  //   });
  // }
}

