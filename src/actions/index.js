import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';
import * as apiKey from './../../api-key.js';

export const requestPetList = (petList) => ({
  type: types.REQUEST_PET_LIST,
  petList
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
    return(fetch('http://api.petfinder.com/pet.find?key=' + apiKey.apiKey + '&location=98103&format=json&breed=' + newBreedString)).then(
      response => response.json(),
      error => console.log('An error occured.', error)).then(function(json)
      {
        let responseObject = {};
        if (json.petfinder.pets.pet.length > 0) {
          json.petfinder.pets.pet.forEach(function(pet) {
            let petId = v4();
            Object.assign(responseObject, {petId: {name: pet.name, id: petId}})
          });
          console.log(responseObject);
          dispatch(receivePetList(responseObject));
        } else {
          console.log('We couldn\'t locate any pets by that breed');
        }
      })
  }
};

export const receivePetList = (petList) => ({
  type: types.RECEIVE_PET_LIST,
  petList
});
