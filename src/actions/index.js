import axios from 'axios';
import { ENV } from '../config/environment';

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

  // I know that this URL here is ridiculous but I built this client app in just a couple of hours because I had to focus on the API
  // Yet, if it's important, please let me know so I can improve the React app too!

  var url = `${ENV.apiUrl}/WheelOfFate/Get`;

  return function(dispatch) {
    axios.get(url)  
    .then((response) => {
      dispatch({type: GET_WHEEL_OF_FATE, payload: response.data })
    });
  }
}