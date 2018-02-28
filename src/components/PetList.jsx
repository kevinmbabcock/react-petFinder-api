import React from 'react';
import Pet from './Pet';
import PropTypes from 'prop-types';

function PetList(){
  return (
    <div>
      {Object.keys(petList).map(petId =>
        var pet = masterPetList[petId];
        <Pet
          name={pet.name}
          type={pet.type}
          breed={pet.breed}
          age={pet.age}
          description={pet.description}
          key={i}/>
      )}
    </div>
  );
}

PetList.propTypes = {
  petList: PropTypes.object
}

export default PetList;
