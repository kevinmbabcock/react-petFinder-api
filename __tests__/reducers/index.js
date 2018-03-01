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

    it('Should update state when API request is made', () => {
      const action = actions.requestPetList({});
      const newStateEntry = {
        isFetching: true,
        petList: action.petList
      }
      expect(petListReducer(initialState.petList, action)).toEqual(newStateEntry);
    })

    it('Should update state when API response is received', () => {
      const action = actions.receivePetList({name: 'kevin'});
      const newObject = {
        isFetching: false,
        petList: action.petList
      };
      expect(petListReducer(initialState.petList, action)).toEqual(newObject);
    })
  });

});
