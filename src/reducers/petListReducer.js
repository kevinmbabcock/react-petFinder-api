import constants from './../constants';
const { initialState, types } = constants;

const petListReducer = (state = initialState.petList, action) => {
  let newPetListEntry;
  let newPetListStateSlice;

  switch (action.type) {

    case types.REQUEST_PET_LIST:
    newPetListEntry = {
      isFetching: true,
      petList: action.petList
    };
    return newPetListEntry;

    case types.RECEIVE_PET_LIST:
    newPetListEntry = {
      isFetching: false,
      petList: action.petList
    };
    return newPetListEntry;

    default:
      return state;
  }
};

export default petListReducer;
