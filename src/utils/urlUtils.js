import queryString from 'query-string';
const R = require('ramda');

export const generateNewURL = function(basePath, params) {
  var isNotEmpty = (value) => { return (!R.isNil(value) && !R.isEmpty(value)); };
  const filledParams = R.filter(isNotEmpty, params);

  const base = R.toLower(basePath);
  const stringifiedParams = queryString.stringify(filledParams);

  return base + (R.isEmpty(stringifiedParams) ? '' : '?') + stringifiedParams;
};

export const parseUrl = function(searchParams) {
  return queryString.parse(searchParams);
};

export const stringify = function(param) {
  return queryString.stringify(param);
};
