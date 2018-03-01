import constants from "./../../src/constants";
import rootReducer from './../../src/reducers/';
import petListReducer from './../../src/reducers/petListReducer';
import changePetReducer from './../../src/reducers/changePetReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('Pet Finder App', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('petListReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(petListReducer(initialState.petList, { type: null })).toEqual(initialState.petList);
    })

    it('Should update state when API call is made', () => {
      const action = actions.requestPet('Golden Retriever');
      const newStateEntry = {
        isFetching: true,
        breed: action.breed
      }
      expect(petListReducer(initialState.petList, action)[action.petId]).toEqual(newStateEntry);
    })
  })











})
