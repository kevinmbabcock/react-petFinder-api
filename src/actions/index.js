import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import * as apiKey from './../../api-key.js';

export const requestPet = (breed) => ({
  type: types.REQUEST_PET,
  breed
});
