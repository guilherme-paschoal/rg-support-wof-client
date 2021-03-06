import { ENV } from '../config/environment';
import axios from 'axios';
import * as actions from '../constants/actionTypes';

const api = ({ dispatch, getState }) => next => action => {

  // in this middleware we only want to deal with actions whose tiype is api.
  // If that's not the case, just handle control to the next middleware
  if(action.type !== actions.API) { 
    return next(action); 
  }

  var url = `${ENV.apiUrl}${action.payload.url}`;
  
  const success = action.payload.success;

  return axios.get(url, {
    params: action.payload.params
  }).then((response) => {
    dispatch(success(response))
  });

}

export default api;