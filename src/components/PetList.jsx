import React from 'react';
import Pet from './Pet';
import PropTypes from 'prop-types';

function PetList({petList}){
  console.log(petList);
  return (
    <div>
      <p>Here are all the pets that match your search:</p>
      {Object.keys(petList.breed).map(petId => {
        let pet = petList.breed[petId];
        console.log(pet);
        return  <Pet
          name={pet.name}
          key={pet.id} />
      })}
    </div>
  );
}

PetList.propTypes = {
  petList: PropTypes.object
}

export default PetList;
