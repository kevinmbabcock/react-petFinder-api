import React from 'react';
import PropTypes from 'prop-types';


function Pet(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <ul>
        <li>Type: {props.type}</li>
        <li>Breed: {props.breed}</li>
        <li>Age: {props.age}</li>
        <li>Description: {props.description}</li>
      </ul>
    </div>

  );
}

Pet.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  breed: PropTypes.string,
  age: PropTypes.number,
  description: PropTypes.string
};



export default Pet;
