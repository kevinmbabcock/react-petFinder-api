import constants from './../constants';
const { initialState, types } = constants;

//reducer only deals with petList state slice

const petListReducer = (state = initialState.petList, action) => {
  let newPetListEntry;

  switch (action.type) {

    // request action only contains information made in request
    // use information to create space in store
    case types.REQUEST_PET_LIST:
    newPetListEntry = {
      isFetching: true,
      breed: action.breed
    };
    return newPetListEntry;

    // receive action contains all information desired from API request
    // use information to reset state slice value
    case types.RECEIVE_PET_LIST:
    newPetListEntry = {
      isFetching: false,
      breed: action.breed
    };
    return newPetListEntry;

    default:
      return state;
  }
};

export default petListReducer;
