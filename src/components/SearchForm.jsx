import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPetList } from './../actions';

function SearchForm({dispatch}){
  let input;
  return (
    <div>
      <form onSubmit={event => {
          event.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchPetList(input.value));
          input.value='';
        }}>
        <input placeholder='breed' ref={node => {
          input = node;
        }}></input>
      <button type='submit'>Search</button>
      </form>
    </div>
  );

}

SearchForm.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(SearchForm);
