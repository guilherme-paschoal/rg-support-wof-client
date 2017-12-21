import * as actions from '../constants/actionTypes';

export const spinWheelOfFate = () => ({
    type: actions.WHEEL_OF_FATE_GET,
    payload: {
      url: '/WheelOfFate/Get',
      success: ({ data }) => {  // remember that when you receive am object in a parameter between brackets, it searches for that property inside the object. ECMASCRIPT dood
        debugger;
        return {type: actions.WHEEL_OF_FATE_SUCCESS, payload: data };
      }
    }
})

// export const failWheelOfFate = () => {
//   return {
//     type: actions.FAIL_WHEEL_OF_FATE,
//     error: "Something wrong happened"
//   }
// }

// export const getWheelOfFate = (dispatch) => {
//   dispatch(spinWheelOfFate());

//   // I know that this URL here is ridiculous but I built this client app in just a couple of hours because I had to focus on the API
//   // Yet, if it's important, please let me know so I can improve the React app too!

//   var url = `${ENV.apiUrl}/WheelOfFate/Get`;

//   return function(dispatch) {
//     axios.get(url)  
//     .then((response) => {
//       dispatch({type: GET_WHEEL_OF_FATE, payload: response.data })
//     });
//   }
