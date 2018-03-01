import React from 'react';
import PropTypes from 'prop-types';


function Pet(props){
  console.log(props)
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

Pet.propTypes = {
  name: PropTypes.string,
};

export default Pet;
