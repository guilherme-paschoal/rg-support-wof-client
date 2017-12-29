import * as actions from '../constants/actionTypes';

const getShiftHistorySuccess = (payload) => ({ type: actions.SHIFTS_HISTORY_SUCCESS, payload })  

export const getShiftHistory = (date) => ({
    type: actions.API,
    payload: {
      url: `/Shifts/Since`,
      params: { date: date },
      success: ({ data }) => getShiftHistorySuccess(data)// remember that when you receive am object in a parameter between brackets, it searches for that property inside the object. ECMASCRIPT dood
    }
})

