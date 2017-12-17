import axios from 'axios';

export const SPIN_WHEEL_OF_FATE = 'SPIN_WHEEL_OF_FATE';
export const GET_WHEEL_OF_FATE = 'GET_WHEEL_OF_FATE';
export const FAIL_WHEEL_OF_FATE = 'FAIL_WHEEL_OF_FATE';

export const spinWheelOfFate = () => {
  return {
    type: SPIN_WHEEL_OF_FATE
  }
}

export const failWheelOfFate = () => {
  return {
    type: FAIL_WHEEL_OF_FATE,
    error: "Something wrong happened"
  }
}

export const getWheelOfFate = (dispatch) => {
  dispatch(spinWheelOfFate());
  return function(dispatch) {
    axios.get('http://localhost:5000/WheelOfFate/Get')
    .then((response) => {
      dispatch({type: GET_WHEEL_OF_FATE, payload: response.data })
    });
  }
  // return {
  //   type: GET_WHEEL_OF_FATE,
  //   payload: [{asd:'asd'},{cvxc:'xcvxx'}]
  // }
}






  // return function(dispatch) {
  //   axios.get('http://localhost:5000/WheelOfFate/Get?date=2017-12-16T00:00:00')
  //   .then((response) => {
  //     dispatch({type: "SPIN_WHEEL_OF_FATE", payload: response.data })
  //   });
  // }