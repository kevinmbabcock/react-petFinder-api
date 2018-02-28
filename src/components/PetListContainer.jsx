import React from 'react';
import { connect } from 'react-redux';


function PetListContainer(){
  return (
    <div>
      <p>This page is about the website</p>
    </div>

  );
}

export default connect()(PetListContainer);
