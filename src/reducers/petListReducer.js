import constants from './../constants';
const { initialState, types } = constants;

const petListReducer = (state = initialState.petList, action) => {
  let newPetsByIdEntry;
  let newPetsByIdStateSlice;

  switch (action.type) {

    case types.REQUEST_PET:
    newPetsByIdEntry = {
      isFetching: true,
      breed: action.breed,
      petId: action.petId
    };
    newPetsByIdStateSlice = Object.assign({}, state, {
      [action.petId]: newPetsByIdEntry
    });
    return newPetsByIdStateSlice;

    default:
      return state;
  }
};

export default petListReducer;
