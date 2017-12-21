import * as actions from '../constants/actionTypes';

const getWheelOfFate = (payload) => ({ type: actions.WHEEL_OF_FATE_SUCCESS, payload })  

export const spinWheelOfFate = () => ({
    type: actions.API,
    payload: {
      url: '/WheelOfFate/Get',
      success: ({ data }) => getWheelOfFate(data)// remember that when you receive am object in a parameter between brackets, it searches for that property inside the object. ECMASCRIPT dood
    }
})

