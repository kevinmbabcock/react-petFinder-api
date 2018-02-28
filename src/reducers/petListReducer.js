import constants from './../constants';
const { initialState, types } = constants;

const petListReducer = (state = initialState.petList, action) => {
  // let newPetList;

  switch (action.type) {

    default:
      return state;
  }
};

export default petListReducer;
