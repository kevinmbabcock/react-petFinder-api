import constants from './../constants';
const { initialState, types } = constants;

// reducer only deals with currentPetId state slice

const changePetReducer = (state = initialState.currentPetId, action) =>  {

  switch (action.type) {

    default:
      return state;
  }
};

export default changePetReducer;
