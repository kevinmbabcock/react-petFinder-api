import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PetList from './PetList';


const PetListContainer = ({petList}) => {
  return (
    <div>
      <PetList petList={petList} />
    </div>
  );
}

PetListContainer.propTypes = {
  petList: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  console.log(state.petList.pet)
  return {
    petList: state.petList
  }
}

export default connect(mapStateToProps)(PetListContainer);
