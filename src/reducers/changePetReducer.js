import constants from './../constants';
const { initialState, types } = constants;

const changePetReducer = (state = initialState.currentPetId, action) =>  {


  switch (action.type) {

    default:
      return state;
  }
};

export default changePetReducer;
