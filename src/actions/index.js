import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import * as apiKey from './../../api-key.js';

export const requestPetList = (petList) => ({
  type: types.REQUEST_PET_LIST,
  petList
});

// export function fetchPetList (breed) {
//
//   return function(dispatch) {
//     dispatch(requestPetList({}));
//     title =
//   }
// }
