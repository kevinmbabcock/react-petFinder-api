import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import * as apiKey from './../../api-key.js';

// this file is to call actions
// allow actions to be called inside of functions
// instead of directly on event handling

export const requestPetList = (breed) => ({
  type: types.REQUEST_PET_LIST,
  breed
});

export function fetchPetList (breed) {

  return function(dispatch) {
    dispatch(requestPetList({}));
    let breedLowercase = breed.toLowerCase().split(' ');
    let newBreed = '';
    breedLowercase.forEach(function(word) {
      let string = word.charAt(0).toUpperCase() + word.slice(1);
      newBreed = newBreed.concat(string + ' ');
    })
    let newBreedString = newBreed.trim().replace(' ', '+');
    console.log(newBreedString);
    return(fetch('http://api.petfinder.com/pet.find?key=' + apiKey.apiKey + '&format=json&location=98103&breed=' + newBreedString)).then(
      response => response.json(),
      error => console.log('An error occured.', error)).then(function(json)
      {
        let responseObject = {};
        if (json.petfinder.pets.pet && json.petfinder.pets.pet.length > 0) {
          json.petfinder.pets.pet.forEach(function(pet) {
            let petId = v4();
            responseObject[petId] = {name: pet.name.$t, id: petId};
          });
          dispatch(receivePetList(responseObject));
        } else {
          console.log('We couldn\'t locate any pets by that breed');
        }
      })
  }
};

export const receivePetList = (breed) => ({
  type: types.RECEIVE_PET_LIST,
  breed
});
