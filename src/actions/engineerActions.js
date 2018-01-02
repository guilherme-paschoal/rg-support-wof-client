import * as actions from '../constants/actionTypes';

const getEngineersSuccess = (payload) => ({ type: actions.GET_ENGINEERS_SUCCESS, payload })  

export const getEngineers = () => ({
  type: actions.API,
  payload: {
    url: `/engineers`,
    params: { },
    success: ({ data }) => getEngineersSuccess(data)// remember that when you receive am object in a parameter between brackets, it searches for that property inside the object. ECMASCRIPT dood
  }
});


