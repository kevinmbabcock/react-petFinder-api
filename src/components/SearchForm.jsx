import React from 'react';
import { connect } from 'react-redux';


function SearchForm(){
  return (
    <div>
      <p>This page is the search form</p>
    </div>

  );
}

export default connect()(SearchForm);
